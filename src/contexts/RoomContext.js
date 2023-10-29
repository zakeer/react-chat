import React, { createContext, useState, useEffect, useContext } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc, query, where, orderBy } from 'firebase/firestore'

import { firebaseDB } from '../services/firebase';
import { useAuth } from './AuthContext';
import { addOwnerPropsToRoom } from '../utils/roomUtils';

export const RoomContext = createContext({});

export function RoomProvider({ children }) {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [loading, setLoading] = useState(true)
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getRoomsList();
    }, []);

    useEffect(() => {
        if (selectedRoom) {
            getRoomMessages();
        }
    }, [selectedRoom, messages]);

    const getRoomMessages = async () => {
        const q = query(
            collection(firebaseDB, "messages"),
            where("room", "==", selectedRoom.id),
            orderBy("date", "asc")
        );
        const querySnapshot = await getDocs(q);
        const newMessages = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newMessages.push(doc.data())
        });
        setMessages(newMessages);
    }

    const getRoomsList = async () => {
        try {
            const roomsCollection = collection(firebaseDB, "rooms");
            const query = await getDocs(roomsCollection);
            const roomsList = [];
            query.forEach(result => {
                const room = { ...result.data(), id: result.id }
                room.users = (room.users || []).filter(user => user.includes('@'))
                roomsList.push(room)
            });
            setRooms(roomsList);
            setLoading(false);

            const alreadySelectedRoom = roomsList.find(room => room.id === selectedRoom?.id);
            if (alreadySelectedRoom) {
                const roomWithOwnerProps = addOwnerPropsToRoom(alreadySelectedRoom, user);
                setSelectedRoom(roomWithOwnerProps);
            }

        } catch (e) {
            console.log(":: GET ROOMS ERROR ::", e);
        }
    }

    const addNewRoom = async (room) => {
        try {
            const roomsCollection = collection(firebaseDB, "rooms");
            await addDoc(roomsCollection, room)
            getRoomsList();
        } catch (error) {
            console.log(":: addNewRoom ERROR ::", error);
        }
    }

    const addNewMessage = async (messagePayload) => {
        try {
            const messagesCollection = collection(firebaseDB, "messages");
            await addDoc(messagesCollection, messagePayload)
        } catch (error) {
            console.log(":: addNewMessage ERROR ::", error);
        }
    }

    const joinRoom = async (room) => {
        console.log(room, user)
        try {
            await updateDoc(
                doc(firebaseDB, 'rooms', room.id),
                {
                    users: [
                        ...room.users,
                        user.email
                    ]
                }
            )
            getRoomsList();
        } catch (error) {
            console.log(":: updateDoc ERROR ::", error);
        }
    }

    console.log(":: SELECTED ROOM ::", { selectedRoom, rooms })
    return <RoomContext.Provider value={{
        rooms,
        selectedRoom,
        onRoomClick: setSelectedRoom,
        addNewRoom,
        joinRoom,
        addNewMessage,
        loading,
        messages
    }}>
        {children}
    </RoomContext.Provider>
}

export const useRooms = () => useContext(RoomContext);
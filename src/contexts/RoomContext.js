import React, { createContext, useState, useEffect, useContext } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc, query, where,onSnapshot} from 'firebase/firestore'

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
    }, [selectedRoom]);

    const getRoomMessages = async () => {
        const q = query(
            collection(firebaseDB, "messages"),
            where("room", "==", selectedRoom.id)
        );

        // const querySnapshot = await getDocs(q);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newMessages = [];
            querySnapshot.forEach((doc) => {
                newMessages.push(doc.data());
            });
            setMessages(newMessages);
          });
          return unsubscribe
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
            // getRoomsList();
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
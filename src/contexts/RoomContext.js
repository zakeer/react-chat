import React, { createContext, useState, useEffect, useContext } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { firebaseDB } from '../services/firebase';

export const RoomContext = createContext({});

export function RoomProvider({ children }) {

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {
        getRoomsList();
    }, []);

    const getRoomsList = async () => {
        try {
            const roomsCollection = collection(firebaseDB, "rooms");
            const query = await getDocs(roomsCollection);
            const roomsList = [];
            query.forEach(result => {
                const room = { ...result.data(), id: result.id }
                roomsList.push(room)
            });
            setRooms(roomsList);
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


    return <RoomContext.Provider value={{
        rooms,
        selectedRoom,
        onRoomClick: setSelectedRoom,
        addNewRoom
    }}>
        {children}
    </RoomContext.Provider>
}

export const useRooms = () => useContext(RoomContext);
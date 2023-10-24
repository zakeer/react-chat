import React from 'react';
import { useRooms } from '../../contexts/RoomContext';

var ChatRoom = () => {
  const { rooms = [], selectedRoom, onRoomClick } = useRooms();
  console.log(":: CHAT ROOM ::", { rooms, selectedRoom })
  return <div className='flex h-screen'>
    <aside className='flex-initial w-64 bg-red-100'>
      <ul className='ChatRoomUl'>
        {rooms.map(room => <li className='ChatRoomLi' key={room.id} onClick={() => onRoomClick(room)}>{room.name}</li>)}
      </ul>
    </aside>
    <section className='flex-1 bg-blue-200'>
      Chat Container
    </section>
  </div>
}

export default ChatRoom;

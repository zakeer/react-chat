import React from 'react';
import { useRooms } from '../../contexts/RoomContext';
import { UserOutlined } from '@ant-design/icons';

var ChatRoom = () => {
  const { rooms = [], selectedRoom, onRoomClick } = useRooms();
  console.log(":: CHAT ROOM ::", { rooms, selectedRoom })
  return <div className='flex h-screen'>
    <aside className='flex-2 w-64 bg-white border-r-2 border-slate-900'>
      <ul className=' text-lg'>
        {rooms.map(room => <div  key={room.id} onClick={() => onRoomClick(room)} className='p-2 w-full border-b border-slate-800 hover:bg-slate-100 cursor-pointer focus:bg-slate-200'>
        <li>
          <p>{room.name}</p> 
          <p className='text-sm ml-52'><UserOutlined />: {room.users.length}</p>
        </li>
        </div>
        )}
      </ul>
    </aside>
    <section className='flex-1 bg-white'>
      Chat Container
    </section>
  </div>
}

export default ChatRoom;

import React from 'react';
import { useRooms } from '../../contexts/RoomContext';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';
import ChatView from './ChatView';

var ChatRoom = () => {
  const { rooms = [], selectedRoom, onRoomClick } = useRooms();
  const { user = {} } = useAuth();
  console.log(":: CHAT ROOM ::", { rooms, selectedRoom })

  const roomsWithUser = rooms.map(room => {
    console.log("CHecking for Owner", room.owner, user.uid, room.owner === user.uid)
    return {
      ...room,
      isOwner: room.owner === user.uid,
      isJoined: (room.users || []).includes(user.uid)
    }
  })

  return <div className='flex h-screen'>
    <aside className='flex-2 w-64 bg-white border-r-2 border-slate-900'>
      <ul className>
        {roomsWithUser.map(room => <RoomList
          key={room.id}
          room={room}
          onClick={onRoomClick}
          isSelected={room.id === selectedRoom?.id}
        />)}
        {/* 
          isSelected={selectedRoom && room.id === selectedRoom.id}
          isSelected={room.id === (selectedRoom || {}).id}
          isSelected={room.id === selectedRoom?.id}
        */}
      </ul>
    </aside>
    <ChatView />
  </div>
}

const RoomList = React.memo(({ room, onClick, isSelected }) => <li
  onClick={() => onClick(room)}
  className={`${isSelected ? 'bg-green-200' : ''} p-2 w-full border-b border-slate-800 hover:bg-slate-100 cursor-pointer focus:bg-slate-200`}
>
  <p>{room.name} {room.isOwner && <small className='px-3 text-sm bg-green-300 rounded text-green-800'>Owner</small>} </p>
  <p className='text-sm ml-52'><UserOutlined />: {room.users.length}</p>
</li>)

export default ChatRoom;

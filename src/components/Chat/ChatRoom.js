import React from 'react';
import { useRooms } from '../../contexts/RoomContext';
import { useAuth } from '../../contexts/AuthContext';
import ChatView from './ChatView';
import RoomList from './RoomList';

var ChatRoom = () => {
  const { rooms = [], selectedRoom, onRoomClick } = useRooms();
  const { user = {} } = useAuth();
  const { loading } = useRooms();
  console.log(":: CHAT ROOM ::", { rooms, selectedRoom })

  const roomsWithUser = rooms.map(room => {
    console.log("CHecking for Owner", room.owner, user.uid, room.owner === user.uid)
    return {
      ...room,
      isOwner: room.owner === user.uid,
      isJoined: (room.users || []).includes(user.email)
    }
  })

  var HandleLoading = () => <p className='text-2xl flex justify-center mt-56'>Loading....</p>

  return <div className='flex h-full'>
    <aside className='flex-2 w-64 bg-white border-r-2 border-slate-900 ui-chat-rooms'>
      {loading ? <HandleLoading /> : <ul className>
        {roomsWithUser.map(room => <RoomList
          key={room.id}
          room={room}
          onClick={onRoomClick}
          isSelected={room.id === selectedRoom?.id}
        />)}
      </ul>}
      
    </aside>
    <ChatView />
  </div>
}


export default ChatRoom;

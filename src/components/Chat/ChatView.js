import React, { useMemo } from 'react';
import { useRooms } from '../../contexts/RoomContext';
import RoomInvitation from './RoomInvitation';
import NoRoomSelected from './RoomSelection';
import ChatContainer from './ChatContainer';

function ChatView() {
    const { selectedRoom, joinRoom } = useRooms();
    const { isOwner, isJoined } = selectedRoom || {};

    if(isOwner || isJoined) {
        return <ChatContainer />
    }


    return <section className='flex-1 p-4'>
        {selectedRoom ? <RoomInvitation room={selectedRoom} onClick={() => joinRoom(selectedRoom)} /> : <NoRoomSelected />}
    </section>
}


export default React.memo(ChatView)


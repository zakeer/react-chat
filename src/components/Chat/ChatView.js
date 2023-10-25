import React from 'react';
import { useRooms } from '../../contexts/RoomContext';
import Button from '../Button';

function ChatView() {
    const { selectedRoom, joinRoom, loading } = useRooms();

    return <section className='flex-1 bg-green-100 p-4'>
        {selectedRoom ? <RoomInvitation room={selectedRoom} onClick={() => joinRoom(selectedRoom)} /> : <NoRoomSelected />}
    </section>
}


const NoRoomSelected = React.memo(() => <p>
    Please Select Room from the list
</p>);

const RoomInvitation = React.memo(({ room, onClick }) => {
    return <div>
        {/* <pre>{JSON.stringify(room, null, 2)}</pre> */}
        <p>Do you want to join <strong>{room.name}</strong>?</p>
        {!room.isOwner && !room.isJoined && <Button onClick={onClick}>Join</Button>}
    </div>
})

export default React.memo(ChatView)


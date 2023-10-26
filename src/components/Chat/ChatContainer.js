import React from 'react';
import Button from '../Button';
import { useRooms } from '../../contexts/RoomContext';
import { UserOutlined } from '@ant-design/icons';

function ChatContainer() {
    const { selectedRoom } = useRooms();
    if (!selectedRoom) return null;
    return <section className='ui-chat-container bg-blue-100 flex-1 flex flex-col'>
        <header className='bg-blue-300 p-3 flex justify-between align-start'>
            <h4>{selectedRoom?.name}</h4> 
            <div className='group relative'>
                <span className='cursor-pointer'>
                    <UserOutlined />
                </span>

                <div className='p-2 bg-white shadow-xl rounded absolute top-full right-0 hidden group-hover:block'>
                    {selectedRoom?.users?.map(user => <div className='p-1 border-b'>{user}</div>)}
                </div>
            </div>
        </header>
        <div className='ui-chat-container-messages flex-1'>
        </div>
        <footer className='bg-white p-3'>
            <form className='flex'>
                <input className='border rounded flex-1 py-1 px-2' />
                <Button>Send</Button>
            </form>
        </footer>
    </section>
}

export default ChatContainer;
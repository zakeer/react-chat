import React from 'react';
import Button from '../Button';
import { useRooms } from '../../contexts/RoomContext';
import { UserOutlined } from '@ant-design/icons';

function ChatContainer() {
    const { selectedRoom } = useRooms();
    if (!selectedRoom) return null;
    return <section className='ui-chat-container flex-1 flex flex-col'>
        <header className='bg-slate-800 p-3 flex justify-between align-start text-white'>
            <h4>{selectedRoom?.name}</h4> 
            <div className='group relative'>
                <span className='cursor-pointer text-white'>
                    <UserOutlined />
                </span>

                <div className='p-2 bg-white shadow-xl rounded absolute top-full right-0 hidden group-hover:block'>
                    {selectedRoom?.users?.map(user => <div className='p-1 border-b'>{user}</div>)}
                </div>
            </div>
        </header>
        <div className='ui-chat-container-messages flex-1'>
        </div>
        <footer className='bg-slate-800 p-3'>
            <form className='flex gap-2'>
                <input className='border rounded flex-1 py-1 pl-8 px-2 focus:outline-none' />
                <Button className="w-24 hover:border">Send</Button>
            </form>
        </footer>
    </section>
}

export default ChatContainer;
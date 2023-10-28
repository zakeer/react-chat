import React, { useState } from 'react';
import Button from '../Button';
import { useRooms } from '../../contexts/RoomContext';
import { UserOutlined } from '@ant-design/icons';
import ChatMessage from './ChatMessage';
import { useAuth } from '../../contexts/AuthContext';

function ChatContainer() {
    const { selectedRoom, addNewMessage, messages } = useRooms();
    const { user } = useAuth();
    const [message, setMessage] = useState("");

    const onMessageSend = () => {
        if (!message) return;
        const payload = {
            message,
            room: selectedRoom.id,
            user: user.email,
            date: (new Date()).getTime()
        }
        console.log(":: onMessageSend ::", payload);
        addNewMessage(payload);
    }


    if (!selectedRoom) return null;
    return <section className='ui-chat-container flex-1 flex flex-col'>
        <header className='bg-slate-800 p-3 flex justify-between align-start text-white'>
            <h4>{selectedRoom?.name}</h4>
            <div className='group relative'>
                <span className='cursor-pointer text-white '>
                    <UserOutlined />
                </span>

                <div className='p-2 shadow-xl rounded absolute top-full bg-slate-600 right-0 hidden group-hover:block'>
                    {selectedRoom?.users?.map(user => <div className='p-1 border-b'>{user}</div>)}
                </div>
            </div>
        </header>
        <div className='ui-chat-container-messages flex-1 p-2 flex flex-col'>
            {messages.map((message, idx) => <ChatMessage
                key={idx}
                {...message}
                currentCurrent={message.user === user.email}
            />)}
            {/* <pre>{JSON.stringify(messages, null, 2)}</pre> */}
            {/* <ChatMessage user="Lakshmi" message="container-messages" date="12/08/2023" />
            <ChatMessage user="Haseena" message="Send" date="13/08/2023" />
            <ChatMessage user="test@gmail.com" message="Any updates" date="13/08/2023" currentCurrent />
            <ChatMessage user="Muskan" message="bsolute top-full" date="14/08/2023" />
            <ChatMessage user="Lakshmi" message="container-messages" date="12/08/2023" />
            <ChatMessage user="Lakshmi" message="container-messages" date="12/08/2023" />
            <ChatMessage user="test@gmail.com" message="Any updates" date="13/08/2023" currentCurrent /> */}
        </div>
        <footer className='bg-slate-800 p-3 flex gap-2'>
            <input value={message} onChange={e => setMessage(e.target.value)} className='border rounded flex-1 py-1 pl-8 px-2 focus:outline-none' />
            <Button type="button" className="w-24 hover:border" onClick={onMessageSend}>Send</Button>
        </footer>
    </section>
}

export default ChatContainer;
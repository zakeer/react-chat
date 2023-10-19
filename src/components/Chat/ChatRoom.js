import React from 'react';

export default function ChatRoom() {
    return <div className='flex'>
        <aside className='flex-initial w-64 bg-red-100'>
            List of Rooms
        </aside>
        <section className='flex-1 bg-blue-200'>
            Chat Container
        </section>
    </div>
}
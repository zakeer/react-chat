import React from 'react';

export default function ChatRoom() {
    return <div className='flex'>
        <aside className='flex-initial w-64 bg-red-100'>
            List of Rooms
        </aside>
        <blockquote class="text-base md:text-md 3xl:text-lg">
  Oh I gotta get on that internet, I'm late on everything!
</blockquote>
        <section className='flex-1 bg-blue-200'>
            Chat Container
        </section>
    </div>
}
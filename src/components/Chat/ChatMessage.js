import React from 'react';

export default function ChatMessage({ user, date, message, currentUser }) {
    const letter = (user || "")[0].toUpperCase();
    const userName = (user || "").split("@")[0];
    return <div className={`mb-3 flex items-start gap-2 ${currentUser ? 'ml-auto flex-row-reverse text-right' : ''}`}>
        <strong className='w-9 h-9 bg-slate-600 flex justify-center items-center rounded-full text-white'>
            {letter}
        </strong>
        <section>
            <header className={`flex gap-2 items-center ${currentUser ? 'flex-row-reverse' : ''}`}>
                <strong>{userName}</strong>
                <small className='text-slate-500'>{date}</small>
            </header>
            <p className='mt-1'>{message}</p>
        </section>

    </div>
}
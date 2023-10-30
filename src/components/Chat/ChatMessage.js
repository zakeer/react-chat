import React from 'react';

export default function ChatMessage({ user, date, message, currentCurrent }) {
    const letter = (user || "")[0]
    const firstLetter = letter.toLocaleUpperCase();
     
    const atIndex = user.indexOf('@');
    const username = user.substring(0, atIndex)

    
    return <div className={`mb-3 flex items-start gap-2 ${currentCurrent ? 'ml-auto flex-row-reverse text-right' : ''}`}>
        <strong className='w-9 h-9 bg-slate-500 text-white flex justify-center items-center rounded-full'>
            {firstLetter}
        </strong>
        <section>
            <header className={`flex gap-2 items-center ${currentCurrent ? 'flex-row-reverse' : ''}`}>
                <strong>{username}</strong>
                <small className='text-slate-300'>{(new Date(date).toLocaleTimeString())}</small>
            </header>
            <p >{message}</p>
        </section>

    </div>
}
import React from 'react';

var ChatRoom = () => {
  return <div className='flex h-screen'>
    <aside className='flex-initial w-64 bg-red-100'>
      Room List
    </aside>
    <section  className='flex-1 bg-blue-200'>
    Chat Container
    </section>
  </div>
}

export default ChatRoom;

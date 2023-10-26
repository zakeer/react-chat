import React, { useState, useEffect } from 'react';

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const fetchChatRooms = async () => {
      try {
        
        setTimeout(() => {
          const data = [
         
          ];
          setChatRooms(data);
          setIsLoading(false);
        }, 2000); 
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
        setIsLoading(false);
      }
    };

    fetchChatRooms();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading chat rooms...</p>
      ) : (
        <ul>
          {chatRooms.map((room) => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChatRoomList;

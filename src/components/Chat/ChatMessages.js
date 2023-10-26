import React, { useState } from "react";
import { useRooms } from "../../contexts/RoomContext";
import { Button, Input } from "antd";

const ChatMessages = () => {
  const { selectedRoom = {} } = useRooms();
  const [chat, setChat] = useState("");
  console.log(chat);

  const handleOnChange = (event) => {
    var {
      target: { value },
    } = event;
    setChat(value);
  };
  return (
    <div className="ui-chat-messages">
      <header className="ui-chatview-header bg-slate-800 text-center text-white">
        <p className="text-xl mt-4">{selectedRoom.name}</p>
      </header>
      <section className="ui-chatview-section">Messages</section>
      <footer className="ui-chatview-footer bg-slate-800 flex gap-4 justify-center items-center">
        <Input
          placeholder="Type a message..."
          className="p-0 h-10 flex-1 ml-2 pl-9"
          value={chat}
          onChange={handleOnChange}
        />
        <Button type="primary" className="w-32">
          Send
        </Button>
      </footer>
    </div>
  );
};

export default React.memo(ChatMessages);

import React from "react";
import { UserOutlined } from "@ant-design/icons";

const RoomList = React.memo(({ room, onClick, isSelected }) => (
  <li
    onClick={() => onClick(room)}
    className={`${
      isSelected ? "bg-slate-300" : ""
    } ui-room flex justify-between align-start p-2 w-full border-b border-slate-800 cursor-pointer `}
  >
    <p>
      {room.name}{" "}
      {room.isOwner && (
        <small className="px-3 bg-green-300 rounded text-green-800">
          Owner
        </small>
      )}{" "}
    </p>
    <p className="whitespace-nowrap">
      <UserOutlined />: {room.users.length}
    </p>
  </li>
));

export default RoomList;

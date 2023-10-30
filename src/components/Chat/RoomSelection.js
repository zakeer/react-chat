import React from "react";
import { useRooms } from "../../contexts/RoomContext";
import { LoadingOutlined } from "@ant-design/icons";

const NoRoomSelected = React.memo(() => {
    var { loading, rooms = []} = useRooms();
    return <div>

        {loading ? <p  className="text-5xl text-center mt-48"><LoadingOutlined /></p>: rooms?.length > 0 ?   <p className="text-3xl text-center mt-48">Please Select Room from the list</p> : <p className="text-5xl text-center mt-48">Create room to start a conversation</p>}
    </div>
});

export default NoRoomSelected;
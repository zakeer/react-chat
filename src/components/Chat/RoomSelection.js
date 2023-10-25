import React from "react";
import { useRooms } from "../../contexts/RoomContext";

const NoRoomSelected = React.memo(() => {
    var { loading } = useRooms()
    return <div>
        {loading ? null :  <p className="text-3xl text-center mt-48">Please Select Room from the list</p>}
    </div>
});

export default NoRoomSelected;
import React from "react";





const RoomInvitation = React.memo(({ room, onClick }) => {
    var isAbleToJoin = !room.isOwner && !room.isJoined;
    
    
    return <div className="flex flex-col items-center mt-36">
        {isAbleToJoin && <p className="text-2xl mb-8">Do you want to join <strong>{room.name}</strong>?</p> }
        {isAbleToJoin && <button className="w-40 rounded p-2 bg-slate-900 text-white mt-4 hover:bg-slate-800" onClick={onClick}>Join</button>}
    </div>
})

export default RoomInvitation;

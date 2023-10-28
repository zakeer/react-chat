export function addOwnerPropsToRoom(room = {}, user = {}) {
  return {
    ...room,
    isOwner: room?.owner === user?.uid,
    isJoined: (room?.users || []).includes(user?.email),
  };
}

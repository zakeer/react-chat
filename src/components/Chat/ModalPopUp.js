import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import PageLink from "../Navigation/PageLink";
import { useAuth } from "../../contexts/AuthContext";
import { useRooms } from "../../contexts/RoomContext";

var ModalPopUp = () => {
  const { user = {} } = useAuth();
  const { addNewRoom } = useRooms();
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [roomName, setRoomName] = useState("");
  const [error, setError] = useState(false);

  const HandleOnChange = (event) => {
    var {
      target: { value },
    } = event;
    setRoomName(value);
    setError(false);
  };

  const handleOk = () => {
    if (roomName) {
      setError(null);
      setRoomName("");
      setIsModalOpen(false);

      const newRoom = {
        users: [],
        name: roomName,
        owner: user.uid
      };
      addNewRoom(newRoom);
    } else {
      setError(true);
    }
  };

  const HandleCancel = () => {
    setIsModalOpen(false);
  };

  const ShowModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setError(null);
    setRoomName("");
  }, [isModalOpen]);

  return (
    <>
      <PageLink to="/chat-room" onClick={ShowModal}>
        CreateChatRoom
      </PageLink>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={HandleCancel}
        className="w-80"
      >
        <h1 className="text-center text-2xl text-blue-500">Create Room</h1>
        {error ? (
          <p className="text-red-600 text-center mt-6 text-xl mb-2">
            Please Provide Room Name!
          </p>
        ) : (
          <p className="text-blue-500 mt-8 text-xl ml-11">
            Enter Your Room Name Here
          </p>
        )}
        <Input
          placeholder=" Room Name"
          className="w-96 ml-11 mt-4 pl-4"
          onChange={HandleOnChange}
          value={roomName}
          allowClear
        />
        <section className="mt-12 flex justify-center gap-6">
          <Button className="w-24" onClick={HandleCancel}>
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 w-24"
            onClick={handleOk}
          >
            Ok
          </Button>
        </section>
      </Modal>
    </>
  );
};

export default ModalPopUp;

import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
        
      <button onClick={openModal} className="bg-[#1da1f2]  text-white p-2 rounded">
        Open for New Chat
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

          <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Welcome to New Chat Room</p>
                <div className="cursor-pointer" onClick={closeModal}>
                  <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M5.293 5.293a1 1 0 0 1 1.414 0L9 7.586l2.293-2.293a1 1 0 1 1 1.414 1.414L10.414 9l2.293 2.293a1 1 0 0 1-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L7.586 9 5.293 6.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </div>
              <p>Chatting goes intersting and able to learn new things</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

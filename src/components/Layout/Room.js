import React from 'react';

var Room = () => {
    return <div>
    <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Room</button>
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create a room</h3>
        <input type='text' placeholder= 'Enter a room name' className=" w-full text-black py-4" />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-black text-white mr-2">Create</button>
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog></div>;
  };
  
  export default Room;
  
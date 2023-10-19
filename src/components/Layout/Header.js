import React from "react";
import PageLinks from "../common/PageLink";

var Header = () => {
  return (
    <header className="bg-slate-900 flex justify-between gap-4 text-white p-4">
      <div>
        <h1 className="text-2xl">Chit-Chat</h1>
      </div>
      <nav className="flex gap-4">
        <PageLinks to="/">Home</PageLinks>
        <PageLinks to="/login">Login</PageLinks>
        <PageLinks to="/signup">Signup</PageLinks>
      </nav>
    </header>
  );
};

export default Header;

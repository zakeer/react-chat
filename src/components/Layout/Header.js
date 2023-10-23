import React, { useContext } from "react";
import PageLinks from "../common/PageLink";
import { AuthContext } from "../../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth"
import firebaseApp from "../../services/firebase";

var Header = () => {
  const { user } = useContext(AuthContext);

  const logout = () => {
    signOut(
      getAuth(firebaseApp)
    )
  }

  return (
    <header className="bg-slate-900 flex justify-between gap-4 text-white p-4">
      <div>
        <h1 className="text-2xl">Chit-Chat</h1>
      </div>
      <nav className="flex gap-4">
        <PageLinks to="/">Home</PageLinks>
        {user ? <>
          <PageLinks to="/" onClick={logout}>Logout</PageLinks>
        </> : <>
          <PageLinks to="/login">Login</PageLinks>
          <PageLinks to="/signup">Signup</PageLinks>
        </>}

      </nav>
    </header>
  );
};

export default Header;

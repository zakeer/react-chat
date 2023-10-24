import { useHistory } from "react-router-dom";
import "../../App.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../Button";

var Home = () => {
  const { user } = useContext(AuthContext);
  var history = useHistory();

  var handleOnCLick = () => {
    if (user) {
      history.push("/chat-room");
    } else {
      history.push("/signup")
    }

  };


  return (
    <div className="HomePageUI">
      <section className="HomePageSection">
        <h1 className="text-center text-6xl text-slate-900 mb-6">Chit-Chat</h1>
        <p className="text-center text-2xl text-slate-900">
          Have Your Best Chat
        </p>
        <p className="text-center text-lg text-slate-900">
          Fast Easy And Unlimited Team Chat
        </p>
        <Button onClick={handleOnCLick}>
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default Home;

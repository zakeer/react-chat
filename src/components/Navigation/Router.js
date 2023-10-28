import { Switch, Route } from "react-router-dom";
import Home from "../Layout/Home";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import ChatRoom from "../Chat/ChatRoom";

var AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/chat-room" component={ChatRoom} />
    </Switch>
  );
};

export default AppRouter;

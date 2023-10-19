import { Switch, Route } from "react-router-dom";
import Home from "../components/Layout/Home";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";

var AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default AppRouter;

import React from "react";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useAuth } from "./context/UserContext";

import Home from "./pages/Home";
import ComponentLibrary from "./pages/ComponentLibrary";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  const user = useAuth();
  console.log(user);
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/componentlibrary" component={ComponentLibrary} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hasAccessToken } from "./actions/auth";
import { Navbar } from "react-bootstrap";
// import {elements} from './components/modal-assets'
import Landing from "./components/Landing";
import LogoutButton from "./components/sub-components/LogoutButton";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const { userId, userName, loggedOut } = useSelector((state) => state.auth);
  const [id, setId] = useState(userId);
  const [name, setName] = useState(userName);
  const [logdOut, setLogdOut] = useState(loggedOut);
  console.log(loggedOut)
  useEffect(() => {
    if (loggedOut) {
      dispatch(hasAccessToken());
    }
    setId(userId);
    setName(userName);
    setLogdOut(loggedOut);
  }, [id, name, logdOut]);
//   console.log(loggedOut);
  return (
    <BrowserRouter>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "unset",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://splitwise-clone.s3.us-east-2.amazonaws.com/favicon/apple-icon-152x152.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          BL3 Companion
        </Navbar.Brand>
        <LogoutButton style={{ position: "right" }} />
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home">
          <Home userId={userId} userName={userName} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

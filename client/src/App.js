import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { hasAccessToken } from "./actions/auth";
import { getLootDrops, LOOT_DROPS } from "./actions/lootDrops";
import { Navbar } from "react-bootstrap";
import Landing from "./components/Landing";
import LogoutButton from "./components/sub-components/LogoutButton";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const { userId, userName, loggedOut } = useSelector((state) => state.auth);
  const { lootDrops } = useSelector((state) => state.lootDrops);
  const lootStorage = window.sessionStorage;

  useEffect(() => {
    (async () => {
      if (loggedOut) {
        dispatch(hasAccessToken());
      }
      if (userId) {
        if (lootDrops) return;

        let lootStored = lootStorage.getItem("lootStored");

        if (JSON.parse(lootStored)) {
          let totalLootDrops = lootStorage.getItem("totalLootDrops");
          totalLootDrops = JSON.parse(totalLootDrops);

          let loot = [];
          for (let i = 0; i < totalLootDrops; i++) {
            let lootItem = lootStorage.getItem(`lootDrop${i}`);
            loot.push(JSON.parse(lootItem));
          }

          return dispatch({ type: LOOT_DROPS, lootDrops: loot });
        }
        trackPromise(dispatch(getLootDrops(userId)));
      }
    })();
    if (JSON.parse(lootStorage.getItem("newLootDropAvailable"))) {
      console.log("you have new loot!");
      if (!userId) return;
      dispatch(getLootDrops(userId));
      lootStorage.setItem("newLootDropAvailable", JSON.stringify(false));
    }
  }, [userId, lootDrops, dispatch, loggedOut, lootStorage]);

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
          <Home userId={userId} userName={userName} lootDrops={lootDrops} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

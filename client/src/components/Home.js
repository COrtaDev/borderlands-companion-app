import React from "react";
import Feed from "./Feed";
import FeedHeader from "./sub-components/FeedHeader";
import SideNav from "../components/sub-components/SideNav";

const Home = ({ userId, userName, lootDrops }) => {
  return (
    <>
      <div
        id="columns"
        style={{
          background: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span style={{ display: "flex", flexDirection: "row" }}>
          <div id="left" style={{ width: "275px", color: "whitesmoke" }}>
            <SideNav />
          </div>
          <div
            id="center"
            style={{ width: "auto", background: "rgb(238 150 40 / 75%)" }}
          >
            <FeedHeader />
            {/* <FeedHeader show={modalShow} onSelect={()=>setModalShow(true)}/> */}
            <div
              id="divider"
              style={{ height: "8px", margin: "0em 1em" }}
            ></div>
            <Feed userId={userId} userName={userName} lootDrops={lootDrops} />
          </div>
          <div id="right" style={{ width: "275px", paddingLeft: "10px" }}>
            <iframe
              title={"Discord Itegration"}
              src="https://discord.com/widget?id=454684422390808577&amp;theme=dark&amp;username=Corta.dev"
              width="100%"
              height="400px"
              allowtransparency="true"
              frameBorder="0"
            ></iframe>
          </div>
        </span>
      </div>
    </>
  );
};
export default Home;

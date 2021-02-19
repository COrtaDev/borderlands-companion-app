import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN, getCookieValue } from "../actions/auth";
import { getLootDrops } from "../actions/lootDrops";
import LootDrop from "./sub-components/LootDrop";
import { trackPromise } from "react-promise-tracker";

const Feed = ({ userId, userName, lootDrops }) => {
  if (!lootDrops) {
    return null;
  } else {
    const lootDropComponents = lootDrops.map((loot) => (
      <LootDrop key={lootDrops.id} loot={loot} userName={userName} />
    ));
    return <>{lootDropComponents}</>;
  }
};

export default Feed;

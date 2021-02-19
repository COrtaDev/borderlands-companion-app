import React from "react";
import LootDrop from "./sub-components/LootDrop";

const Feed = ({ userId, userName, lootDrops }) => {
  if (!lootDrops) {
    return null;
  } else {
    const lootDropComponents = lootDrops.map((loot) => (
      <LootDrop key={loot.id} loot={loot} userName={userName} />
    ));
    return <>{lootDropComponents}</>;
  }
};

export default Feed;

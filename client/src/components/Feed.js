import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import { getLootDrops } from '../actions/lootDrops';
import LootDrop from './sub-components/LootDrop';

const Feed = (props) => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const { loot } = useSelector(state => state.lootDrops);
    const { userId, userName } = props;
    console.log(loot)

    useEffect(() => {
        if (!userId || loot) return;
        dispatch(getLootDrops(userId))
    });

    if (!token) { return <Redirect to="/"></Redirect> };
    // From the feed we will render the Loot Drop components.
    if (!loot) {return null;}
    else {
        console.log(loot)
        //begin rendering loot components for the feed
        const lootDropComponents = loot.loot.map((loot) => <LootDrop key={loot.id} loot={loot} userName={userName} />)
        // dispatch()
        return (
            <>
                {lootDropComponents}
            </>
        );
    }


};

export default Feed;

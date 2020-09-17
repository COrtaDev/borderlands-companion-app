import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue, SIGN_IN } from '../actions/auth';
import { getLootDrops } from '../actions/lootDrops';

import LootDrop from './sub-components/LootDrop';

const Feed = (props) => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const { loot } = useSelector(state => state.lootDrops);
    const { userId, userName } = props;

    useEffect(() => {
        if (!userId) return;
        dispatch(getLootDrops(userId))
    }, [userId, userName])

    if (!token) { return <Redirect to="/"></Redirect> };
    // From the feed we will render the Loot Drop components.
    if (loot) {

        console.log(loot)
        //begin rendering loot components for the feed
        const lootDropComponents = loot.loot.map((loot) => <LootDrop key={loot.id} loot={loot} userName={userName} />)
        return (
            <>
                {/* <h1>Welcome to your feed Vault Hunter {userName}!</h1> */}
                {lootDropComponents}
            </>
        );
    } else {
        return (
            <>
                <h1>Welcome to your feed Vault Hunter!</h1>
                <p>You have no Loot yet...</p>
            </>
        );
    }


};

export default Feed;

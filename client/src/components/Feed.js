import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue, SIGN_IN } from '../actions/auth';
import { getLootDrops } from '../actions/lootDrops';

import LootDrop from './sub-components/LootDrop';

const Feed = (props) => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    // const [feedUpdated, setFeedUpdated] = useState();
    // const { userId, username } = useSelector(state => state.auth);
    const { loot } = useSelector(state => state.lootDrops);
    const { userId, username } = props;
    useEffect(() => {
        if (!userId) return;
        dispatch(getLootDrops(userId))
    }, [userId])

    if (!token) { return <Redirect to="/landing"></Redirect> };
    // From the feed we will render the Loot Drop components.
    if (loot) {
        //begin rendering loot components for the feed
        return (
            <>
                <h1>Welcome to your feed Vault Hunter!</h1>
                <LootDrop loot={loot} />
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

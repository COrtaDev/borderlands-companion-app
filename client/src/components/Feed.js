import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import { getLootDrops } from '../actions/user';

// import { lootDropsUrl } from '../config';

import LootDrop from './sub-components/LootDrop';

const Feed = () => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const [feedUpdated, setFeedUpdated] = useState(false);
    const { userId, username } = useSelector(state => state.auth);
    const { loot } = useSelector(state => state.user);


    useEffect(() => {
        if (userId === undefined) return;
        if (!feedUpdated) {
            dispatch(getLootDrops(userId));
            setFeedUpdated(true);
        }
    }, [userId]);

    if (!token) { return <Redirect to="/"></Redirect> };
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

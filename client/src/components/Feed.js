import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import { getLootDrops } from '../actions/lootDrops';
import LootDrop from './sub-components/LootDrop';
import { trackPromise } from 'react-promise-tracker';

const Feed = (props) => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const { loot } = useSelector(state => state.lootDrops);
    const { userId, userName } = props;
    // console.log(token)
    useEffect(() => {
        // console.log(loot)
        // console.log(userId)
        if (loot || !userId) return;
        trackPromise(dispatch(getLootDrops(userId)))
    });

    if (!token) { return <Redirect to="/"></Redirect> };
    if (!loot) { return null; }
    else {
        const lootDropComponents = loot.loot.map(
            (loot) =>
                <LootDrop key={loot.id} loot={loot} userName={userName} />)
        return (
            <>
                {lootDropComponents}
            </>
        );
    }


};

export default Feed;

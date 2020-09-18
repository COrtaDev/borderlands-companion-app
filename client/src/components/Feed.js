import React, { useEffect, componentDidMount } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ACCESS_TOKEN, getCookieValue } from '../actions/auth';
import { getLootDrops } from '../actions/lootDrops';
import LootDrop from './sub-components/LootDrop';
import waitingDialog from 'bootstrap-waitingfor';

const Feed = (props) => {
    const dispatch = useDispatch();
    const token = getCookieValue(ACCESS_TOKEN);
    const { loot } = useSelector(state => state.lootDrops);
    const { userId, userName } = props;
    
    useEffect(() => {
        if (loot || !userId) return;
        dispatch(getLootDrops(userId))
    });

    if (!token) { return <Redirect to="/"></Redirect> };
    // From the feed we will render the Loot Drop components.
    if (!loot) { return null; }
    else {
        console.log(loot)
        //begin rendering loot components for the feed
        const lootDropComponents = loot.loot.map((loot) => <LootDrop key={loot.id} loot={loot} userName={userName} />)
        return (
            <>
                {lootDropComponents}
            </>
        );
    }


};

export default Feed;

import React from 'react';
import Feed from './Feed';
import FeedHeader from './sub-components/FeedHeader';

const Home = (props) => {
    const { userId, userName } = props;

    return (
        <>
            <div id='columns' style={{ background: 'black', display:'flex', flexDirection:'row', justifyContent: 'center' }}>
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                    <div id='left' style={{ width: '275px', color: 'whitesmoke' }}>Side nav goes here</div>
                    <div id='center' style={{ width: 'auto', background: 'rgb(238 150 40 / 75%)' }}>
                        <FeedHeader />
                        <div id='divider' style={{ height: '8px', margin: '0em 1em' }}></div>
                        <Feed userId={userId} userName={userName} />
                    </div>
                    <div id='right' style={{ width: '275px' }}></div>
                </span>
            </div>
        </>
    )
}
export default Home;

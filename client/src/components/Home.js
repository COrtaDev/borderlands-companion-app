import React, {useState} from 'react';
import Feed from './Feed';
import FeedHeader from './sub-components/FeedHeader';
import SideNav from '../components/sub-components/SideNav';
import SelectItemModal from '../components/modals/SelectItemModal';

const Home = (props) => {
    const { userId, userName } = props;
    // const [modalShow, setModalShow] = useState(false);
    // console.log(modalShow)
    return (
        <>
            <div id='columns' style={{ background: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                    <div id='left' style={{ width: '275px', color: 'whitesmoke' }}>
                        <SideNav />
                    </div>
                    <div id='center' style={{ width: 'auto', background: 'rgb(238 150 40 / 75%)' }}>
                        <FeedHeader />
                        {/* <FeedHeader show={modalShow} onSelect={()=>setModalShow(true)}/> */}
                        <div id='divider' style={{ height: '8px', margin: '0em 1em' }}></div>
                        <Feed userId={userId} userName={userName} />
                    </div>
                    <div id='right' style={{ width: '275px' }}></div>
                </span>
            </div>
            {/* <SelectItemModal
                show={modalShow}
                onHide={() => setModalShow(false)}>
            </SelectItemModal> */}
        </>
    )
}
export default Home;

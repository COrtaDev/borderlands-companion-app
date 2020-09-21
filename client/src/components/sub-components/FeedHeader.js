import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor, faDiceD20, faCity, faHandHoldingUsd, } from '@fortawesome/free-solid-svg-icons';

import ReactTooltip from 'react-tooltip';
import '../styles/feedheader.css';

import SelectItemModal from '../modals/SelectItemModal';
import SelectNameModal from '../modals/SelectNameModal';
import SelectManufacturerModal from '../modals/SelectManufacturerModal';

const imgUrl = 'https://vignette.wikia.nocookie.net/borderlands/images/a/a3/BL3_Fustercluck_Off_Icon.png/revision/latest?cb=20200910175524'

const FeedHeader = (props) => {
    const { itemTypeWithHashtag, itemNameWithHashtag, itemManufacturerWithHashtag } = useSelector(state => state.lootDrops);
    const [itemModalShow, setItemModalShow] = useState(false)
    const [nameModalShow, setNameModalShow] = useState(false)
    const [manufacturerModalShow, setManufacturerModalShow] = useState(false)
    /*
    In order to cut back on the amount of warnings I am receiving in the console during development, I am entering href='/home' for many of these <a> tags.
    I am telling you this so you can understand strange behavior if you forget and use the site as normal
    ~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~
    this component is getting out of control... MAJOR refactor needed... LOLWTF is this...
    start buy pulling out repetitive code blocks, defining them in sub-compoments as component functions and moving this component into the "Main Components" directory. It'll be worth the effort...
    */
    return (
        <>
            <header style={{ background: 'black', width: '596px', borderRadius: '0em 0em 1em 1em', boxShadow: 'inset 0px -8px 22px 0px rgba(217, 171, 17, 0.35)', border: '1px solid rgb(230 228 224 / 50%)' }}>
                <div>
                    <div style={{ borderBottom: '1px solid rgba(245, 245, 245, .4 )', }}>
                        <p style={{ color: 'whitesmoke', fontFamily: 'helvetica', fontSize: '20px', margin: '10px' }}>Home</p>
                    </div>
                    <article style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: '5px 10px 8px' }}>
                        <div>
                            <figure style={{ margin: '0px' }}>
                                <p style={{ margin: '0px' }}><a href='/home'><img style={{ width: '50px', borderRadius: '7em' }} src={imgUrl} alt=''></img></a></p>
                            </figure>
                        </div>
                        <div style={{ width: '100%', boxSizing: 'border-box', padding: '5px' }}>
                            <div style={{ borderBottom: '1px solid rgba(245, 245, 245, .4 )', }}>
                                <input style={{ width: '100%', height: '35px', boxSizing: 'border-box', background: 'black', border: 'unset' }} type="text" placeholder="Share your loot drop..."></input>
                            </div>
                            <div>
                                <span style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding: '8px 4px 0px 4px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '35%' }}>
                                        <div id='item-type' data-tip data-for='itemType'>
                                            {/* clicking here will render a modal that allows you to select the type of item you wish to drop */}
                                            <a onClick={() => setItemModalShow(true)} style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)', }}><span>
                                                <FontAwesomeIcon icon={faDiceD20} size='2x' opacity='.5' />
                                                <ReactTooltip style={{ padding: '8px' }} backgroundColor='rgb(102 2 0)' id='itemType' place='bottom' effect='float'
                                                    overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
                                                        left = -35;
                                                        top = 24;
                                                        return { top, left }
                                                    }}>
                                                    <div style={{ minWidth: 'max-content' }}>Item Type</div></ReactTooltip></span>
                                            </a>
                                        </div>
                                        <div id='item-name' data-tip data-for='itemName'>
                                            {/* clicking here will render a modal that allows you to select the type of item you wish to drop */}
                                            <a onClick={() => setNameModalShow(true)} style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)', }}><span>
                                                <FontAwesomeIcon icon={faHandHoldingUsd} size='2x' opacity='.5' />
                                                <ReactTooltip style={{ padding: '8px' }} backgroundColor='rgb(102 2 0)' id='itemName' place='bottom' effect='float'
                                                    overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
                                                        left = -35;
                                                        top = 24;
                                                        return { top, left }
                                                    }}>
                                                    <div style={{ minWidth: 'max-content' }}>Item Name</div></ReactTooltip></span>
                                            </a>
                                        </div>
                                        <div id='item-manufacturer' data-tip data-for='itemManufacturer'>
                                            <a onClick={() => setManufacturerModalShow(true)} style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)', }}><span>
                                                <FontAwesomeIcon icon={faCity} size='2x' opacity='.5' />
                                                <ReactTooltip style={{ padding: '8px' }} backgroundColor='rgb(102 2 0)' id='itemManufacturer' place='bottom' effect='float'
                                                    overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
                                                        left = -55;
                                                        top = 24;
                                                        return { top, left }
                                                    }}>
                                                    <div style={{ minWidth: 'max-content' }}>Item Manufacturer</div></ReactTooltip></span>
                                            </a>
                                        </div>
                                        <div id='item-elements' data-tip data-for='itemElement'>
                                            <a href='/home' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)', }}><span>
                                                <FontAwesomeIcon icon={faMeteor} size='2x' opacity='.5' />
                                                <ReactTooltip style={{ padding: '8px' }} backgroundColor='rgb(102 2 0)' id='itemElement' place='bottom' effect='float'
                                                    overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
                                                        left = -45;
                                                        top = 24;
                                                        return { top, left }
                                                    }}>
                                                    <div style={{ minWidth: 'max-content' }}>Item Element</div></ReactTooltip></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '125px', height: '35px', borderRadius: '1em', background: 'rgb(102 2 0 / 50%)' }}>
                                        <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', color: 'whitesmoke', margin: '0px' }}>Drop this Loot</p>
                                    </div>
                                </span>
                            </div>
                            <span>
                                <div style={{ width: 'fit-content', background: 'rgb(238 150 40 / 80%)', borderRadius: '.3em', padding: '0px 3px' }}>{itemTypeWithHashtag}</div>
                                <div style={{ width: 'fit-content', background: 'rgb(238 150 40 / 80%)', borderRadius: '.3em', padding: '0px 3px' }}>{itemNameWithHashtag}</div>
                                <div style={{ width: 'fit-content', background: 'rgb(238 150 40 / 80%)', borderRadius: '.3em', padding: '0px 3px' }}>{itemManufacturerWithHashtag}</div>
                            </span>
                        </div>
                    </article>
                </div>
            </header>
            <SelectItemModal show={itemModalShow} onHide={() => setItemModalShow(false)} />
            <SelectNameModal show={nameModalShow} onHide={() => setNameModalShow(false)} />
            <SelectManufacturerModal show={manufacturerModalShow} onHide={() => setManufacturerModalShow(false)} />
        </>
    )
}
export default FeedHeader;

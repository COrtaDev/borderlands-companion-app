import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar, faRetweet, faBomb, faExternalLinkAlt, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
const imgUrl = "https://vignette.wikia.nocookie.net/borderlands/images/f/ff/Zane_1.png/revision/latest/scale-to-width-down/120?cb=20190925154035"
const itemUrl = "https://vignette.wikia.nocookie.net/borderlands/images/e/ed/Seein%27_Dead_infoboxpic.jpg"
const message = "Who knew this would be so hard to find?"
const prefix = "Dastardly"
const item = "Seein' Dead"
const level = 50
// import "https://kit.fontawesome.com/85cc9afac7.js"
const LootDrop = () => {


    return (
        <>
            <article id='top' style={{ display: 'flex', flexDirection: "row", width: 'max-content', border: '1px solid lightgrey', borderRadius: '1rem' }}>
                <figure style={{ marginRight: '20px', marginLeft: '20px' }}>
                    <p><img src={imgUrl} style={{ borderRadius: '5rem', }} alt=''></img></p>
                </figure>
                <div>
                    <div>
                        <p style={{ fontSize: '22px', borderBottom: '1px solid lightgrey', marginBottom: '0px' }}>
                            <strong>Vault Hunter</strong> <small>@ZFerocityFlint</small> <small>1:56PM | Sep 9, 2020</small><br></br>
                            {message}
                        </p>
                        {/* I think I should render a sub-compoment here */}
                        {/* It should be an sub-component based on an item associated with the loot drop */}
                        {/* I would pass it in as a prop and have it rendered here */}
                        <p style={{ display: 'flex', flexDirection: "column", alignItems: "center", fontSize: '32px', marginTop: '0px', marginBottom: '0px', wordSpacing: '.25rem', letterSpacing: '.0625rem' }}>
                            {prefix} {item} LVL {level}<br></br>
                            <img src={itemUrl} style={{ width: '500px', borderRadius: '1rem' }} alt=''></img>
                        </p>
                    </div>
                    <nav>
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: '10px', marginTop: '10px' }}>
                            <a>
                                <span><FontAwesomeIcon icon={faCommentDollar} size='2x' opacity='.5' /></span>
                            </a>
                            <a>
                                {/* <i class="fas fa-retweet"></i> */}
                                <span><FontAwesomeIcon icon={faRetweet} size='2x' opacity='.5' /></span>
                            </a>
                            <a>
                                {/* <i class="fas fa-bomb"></i> */}
                                <span><FontAwesomeIcon icon={faBomb} size='2x' opacity='.5' /></span>
                            </a>
                            <a>
                                {/* <i class="fas fa-external-link-alt"></i> */}
                                <span><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' opacity='.5' /></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div style={{ margin: '20px' }}>
                    <a>
                        <span>
                            <FontAwesomeIcon icon={faSkullCrossbones} size='2x' opacity='.5' />
                        </span>
                    </a>
                </div>
            </article>
        </>
    )
}

export default LootDrop;

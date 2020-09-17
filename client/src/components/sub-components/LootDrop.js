import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar, faRetweet, faBomb, faExternalLinkAlt, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { getDate } from '../../utils';
const avatarUrl = "https://vignette.wikia.nocookie.net/borderlands/images/f/ff/Zane_1.png/revision/latest/scale-to-width-down/120?cb=20190925154035";
// const item = "Seein' Dead";
const handle = "zFerocityFlynt";

const LootDrop = (props) => {
    const { userName } = props;
    const { message, level, created_at, likes, comments } = props.loot;
    const { item_name } = props.loot.loot_item
    const { imgUrl, itemUrl } = props.loot.item_info;

    return (
        <>
            <article id='main' style={{
                display: 'flex ', flexDirection: 'column', alignItems: 'left', boxShadow: 'inset 0px 0px 22px 0px rgba(217, 171, 17, 0.35)',
                width: 'max-content', border: '1px solid rgb(230 228 224 / 50%)', borderRadius: '1rem', background: 'black', padding: '20px 20px 0px 20px', marginBottom: '2px'
            }}>
                <article id='top' style={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-start', width: 'auto', }}>
                    <figure style={{ margin: '0px 20px 0px 0px' }}>
                        <p><a href='/users/<id>' style={{ color: 'whitesmoke', }} ><img src={avatarUrl} style={{ borderRadius: '7rem', boxShadow: '0px 0px 20px 0px rgba(217, 171, 17, 0.2)' }} alt=''></img></a></p>
                    </figure>
                    <div id='space' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', boxSizing: 'content-box', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: "column", color: 'whitesmoke', fontFamily: 'Helvetica', }}>
                            <p>
                                <strong style={{ fontSize: '27px', textShadow: '1px 1px 4px rgb(254 254 206 / 33%)', WebkitTextStroke: '1px rgb(0 0 0 / 75%)' }}>{userName}</strong><br></br>
                                <small style={{ color: '#d3d2ab', fontSize: '16px', opacity: '0.6' }}>@{handle}</small> <small style={{ opacity: '0.85' }}>{getDate(created_at)}</small>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '.02rem', }}>{message}</p>
                        </div>
                        <div style={{ marginLeft: '20px', color: 'whitesmoke', }}>
                            <a href='/delete' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)', }}><span><FontAwesomeIcon icon={faSkullCrossbones} size='2x' opacity='.5' /></span></a>
                        </div>
                    </div>
                </article>
                <article id='loot' style={{ width: 'max-content', }}>
                    <div style={{ color: 'whitesmoke' }}>
                        <div style={{ width: 'max-content', }}>
                            <p style={{
                                display: 'flex', flexDirection: "column", alignItems: "center", fontWeight: '600', fontSize: '30px', wordSpacing: '.1rem',
                                letterSpacing: '.0625rem', margin: '0px', color: 'rgb(246 238 20 / 900%)', borderRadius: '1rem', border: '1px solid rgb(230 228 224 / 50%)',
                                background: 'rgb(102 2 0 / 100%)', fontFamily: 'Helvetica', boxShadow: 'inset 0px 0px 13px 0px rgba(217, 171, 17, 0.40)',
                                padding: '0px 1px 1px 1px', textShadow: '1px 1px 1px rgb(254 254 206 / 40%)', WebkitTextStroke: '1px rgb(0 0 0 / 30%)'
                            }}>
                                {} {item_name} LVL {level}<br></br>
                                <a href={itemUrl} target='_blank' rel='noreferrer noopener'><img src={imgUrl} style={{ width: '550px', borderRadius: '1rem', border: '1px solid rgb(230 228 224 / 50%)', boxShadow: ' 0px 0px 7px 0px rgba(217, 171, 17, 0.40)' }} alt=''></img></a>
                            </p>
                        </div>
                        <nav id='icons'>
                            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", padding: '10px', }}>
                                <div id='comments' style={{ display: "flex", alignItems: 'center' }}>
                                    <a href='/comments/add/<id>' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)' }}><span><FontAwesomeIcon icon={faCommentDollar} size='2x' opacity='.5' /></span></a>
                                    <span style={{ marginLeft: '.8em', color: 'whitesmoke', fontFamily: 'Helvetica', opacity: '.7' }}>{comments}</span>
                                </div>
                                <div id='echos' style={{ display: "flex", alignItems: 'center' }}>
                                    <a href='/users/retweets/<id>' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)' }}><span><FontAwesomeIcon icon={faRetweet} size='2x' opacity='.5' /></span></a>
                                </div>
                                <div id='likes' style={{ display: "flex", alignItems: 'center' }}>
                                    <a href='/bombs' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)' }}><span><FontAwesomeIcon icon={faBomb} size='2x' opacity='.5' /></span></a>
                                    <span style={{ marginLeft: '.8em', color: 'whitesmoke', fontFamily: 'Helvetica', opacity: '.7' }}>{likes}</span>
                                </div>
                                <div id='share' style={{ display: "flex", alignItems: 'center' }}>
                                    <a href='/share' style={{ color: 'whitesmoke', filter: 'drop-shadow(1px 1px 1px #ffffcd)' }}><span><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' opacity='.5' /></span></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </article>
            </article>
        </>
    )
}

export default LootDrop;

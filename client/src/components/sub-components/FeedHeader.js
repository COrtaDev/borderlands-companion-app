import React from 'react';
const imgUrl = 'https://vignette.wikia.nocookie.net/borderlands/images/a/a3/BL3_Fustercluck_Off_Icon.png/revision/latest?cb=20200910175524'

const FeedHeader = () => {


    return (
        <>
            <header style={{ background: 'black', borderRadius: '0em 0em 1em 1em', boxShadow: 'inset 0px -8px 22px 0px rgba(217, 171, 17, 0.35)', border: '1px solid rgb(230 228 224 / 50%)' }}>
                <div>
                    <div style={{ borderBottom: '1px solid rgba(245, 245, 245, .4 )', }}>
                        <p style={{ color: 'whitesmoke', fontFamily: 'helvetica', fontSize: '20px', margin: '10px' }}>Home</p>
                    </div>
                    <article style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: '5px 10px 8px' }}>
                        <div>
                            <figure style={{ margin: '0px' }}>
                                <p style={{ margin: '0px' }}><a><img style={{ width: '50px', borderRadius: '7em' }} src={imgUrl} alt=''></img></a></p>
                            </figure>
                        </div>
                        <div style={{ width: '100%', boxSizing: 'border-box', padding: '5px' }}>
                            <div style={{ borderBottom: '1px solid rgba(245, 245, 245, .4 )', }}>
                                <input style={{ width: '100%', height: '35px', boxSizing: 'border-box', background: 'black', border: 'unset' }} type="text" placeholder="Share your loot drop..."></input>
                            </div>
                            <div>
                                <span style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding:'8px 4px 0px 4px' }}>
                                    <div>
                                        <p style={{ color: 'whitesmoke', margin: '0px' }}>Buttons will go here...</p>
                                    </div>
                                    <div>
                                        <p style={{ color: 'whitesmoke', margin: '0px' }}>Submit button will go here</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </header>
        </>
    )
}
export default FeedHeader;

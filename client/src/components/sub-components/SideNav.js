import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faCrosshairs, faBomb, faUserSecret, faCommentDollar, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import '../styles/sidenav.css';

const SideNav = () => {

    return (
        <>
            <aside id='sideNav' className='menu'>
                <ul className='list'>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faCaravan} size='2x' opacity='1' />Home
                            </a>
                        </li>
                    </div>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faCrosshairs} size='2x' opacity='1' />Explore
                            </a>
                        </li>
                    </div>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faBomb} size='2x' opacity='1' />Likes
                            </a>
                        </li>
                    </div>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faUserSecret} size='2x' opacity='1' />Follows
                            </a>
                        </li>
                    </div>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faCommentDollar} size='2x' opacity='1' />Comments
                            </a>
                        </li>
                    </div>
                    <div className='menu menu-item'>
                        <li id='list-item'>
                            <a className='list list-item'>
                                <FontAwesomeIcon id='icons' icon={faPiggyBank} size='2x' opacity='1' />Your Loot
                            </a>
                        </li>
                    </div>
                    {/* <div class='menu menu-item'><li id='list-item'><a class='list list-item'>New Loot Drop Button</a></li></div> */}
                </ul>
            </aside>
        </>
    )
}

export default SideNav;

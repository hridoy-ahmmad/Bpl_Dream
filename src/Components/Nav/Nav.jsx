import React from 'react';
import coin from '../../assets/Currency.png'
import logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <div className="navbar container mx-auto">
            <a className='navbar-start'>
                <img src={logo} alt="logo" />
            </a>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="1"
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-32 p-2 shadow bg-linear-to-br from-black to-black/70  text-amber-50 backdrop-blur-3xl">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul>
                <a className="btn rounded-xl"> 0 coins <img src={coin} alt="" /> </a>
            </div>

        </div>
    );
};

export default Nav;
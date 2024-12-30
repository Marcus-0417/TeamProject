import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            {/* 頁首區 */}
            <header className="topbar">
                {/* Logo */}
                <div className="logo">
                    <img className="img-logo" src="./images/logo.png" alt="" />
                    <h1>郵你真好</h1>
                </div>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">首頁</Link></li>
                        <li><a href="/PC-index.html">配對明信片</a></li>
                        {/* <li><a href="">商店</a></li> */}
                        <li><a href="/Member-Index.html">會員專區</a></li>
                        <li><a href="/about.html">關於</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
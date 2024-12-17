import '../scss/MemStoryPage.scss'
import React from "react";
import { Link } from "react-router-dom";

function MemStoryPage() {
    return (
        <div id="MemStoryPage">
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
                        <li><a href="">配對明信片</a></li>
                        <li><a href="">商店</a></li>
                        <li><a href="">會員專區</a></li>
                        <li><a href="">關於</a></li>
                    </ul>
                </nav>
            </header>

            {/* 內容區 */}
            <main id="MemStoryPage-main">

            <div id='MSP-Section1'>
            <img id='MSP-Section1-img1' src="./images/MemStoryPage/p1-papers-5.jpg" alt="" />
            <img id='MSP-Section1-img2' src="./images/MemStoryPage/p1-papers-4.jpg" alt="" />
            <img id='MSP-Section1-img3' src="./images/MemStoryPage/postcard-islands.jpg" alt="" />
            <img id='MSP-Section1-img4' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img5' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img6' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img7' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img8' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img9' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img10' src="./images/MemStoryPage/" alt="" />
            <img id='MSP-Section1-img11' src="./images/MemStoryPage/" alt="" />

            </div>

            <div id='MSP-Section2'>
            <img id='MSP-Section2-img1' src="./images/MemStoryPage/p1-papers-6.png" alt="" />


            </div>

            </main>
            <div className='footer'>
                <footer>
                    <p>郵你真好 &copy; 2024 postcard.com</p>
                </footer>
            </div>
        </div>

    )
}

export default MemStoryPage
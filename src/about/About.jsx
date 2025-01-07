import Navbar from "../Navbar";
import "../CSS/styles.css";
import { Link } from "react-router-dom";


export default function About(){
  return(
   
    <div id="AboutPage">
    <Navbar/>
    {/* 內容區 */}
    <main>
    <div className="wrap">
      {/* 左側按鈕  */}
      <div className="btn ">
      <Link to="/About"><button className="button-grow-shadow">關於</button></Link>
      <Link to="/Qa"><button className="button-grow-shadow">FAQ</button></Link>
        <Link to="/Content"><button className="button-grow-shadow">聯絡我們</button></Link>
        
      </div>

      {/* 中間內容 */}
      <div className="main">
        <div className="title">
          <h2>
            <span className="block block1">關</span>
            <span className="block block2">於</span>
            <span className="block block3">郵</span>
            <span className="block block4">你</span>
            <span className="block block5">真</span>
            <span className="block block6">好</span>
          </h2>
        </div>

        <div className="info">
          <div className="box1">
            <h3>郵你真好是一個什麼樣的平台?</h3>
            <p>為了喜歡使用實體卡片與別人交流的人所設計的平台，在這裡可以獲得良好情緒價值、找到同頻的好夥伴進行友好交流，我們希望在這科技發達的時代，依然能夠使用實體明信片並配上手寫字，創造有溫度的交流。
            </p>
          </div>

          <div className="box1b">
            <h3>郵你真好是如何誕生的呢?</h3>
            <p>為了喜歡使用實體卡片與別人交流的人所設計的平台，在這裡可以獲得良好情緒價值、找到同頻的好夥伴進行友好交流，我們希望在這科技發達的時代，依然能夠使用實體明信片並配上手寫字，創造有溫度的交流。
            </p>
          </div>
        </div>
      </div>

      {/* 裝飾區  */}
      <figure className="pic1"><img src="./images/tape-1.png" alt=""/></figure>
      <figure className="pic2"><img src="./images/tape-1.png" alt=""/></figure>
      <figure className="pic3"><img src="./images/postmask-5.png" alt=""/></figure>
      <figure className="pic4"><img src="./images/flowers-2.png" alt=""/></figure>
      <figure className="pic5"><img src="./images/postmark-1.png" alt=""/></figure>
      <figure className="pic6"><img src="./images/small_paper-3.png" alt=""/></figure>
      <figure className="pic7"><img src="./images/flowers-3.png" alt=""/></figure>
      <figure className="pic8"><img src="./images/tape-2.png" alt=""/></figure>
      <figure className="pic9"><img src="./images/tape-2.png" alt=""/></figure>
    </div>
  </main>


  {/* 頁尾區  */}
  <footer className="footer">
    <div>
      <p>郵你真好 &copy; 2024 postcard.com</p>
    </div>
  </footer>
    </div>
  
  )
}
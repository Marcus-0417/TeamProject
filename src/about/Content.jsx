import Navbar from "../Navbar";
import "../CSS/styles3.css";
import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div id="contentPage">
      <Navbar />

      {/* 內容區 */}
      <main>
        <div className="wrap">
          {/* 左側按鈕  */}
          <div className="btn ">
            <Link to="/About"><button className="button-grow-shadow">關於</button></Link>
            <Link to="/Qa"><button className="button-grow-shadow">FAQ</button></Link>
            <Link to="/Content"><button className="button-grow-shadow">聯絡我們</button></Link>

          </div>

          {/* 內容區  */}
          <div className="info2-box">
            <div className="box1c">
              <h2>請在此處留下您的問題與聯繫方式，我們將盡速與您聯繫。</h2>
            </div>

            <div className="info2">
              <div className="box2c">
                <h3>名字</h3>
                <input type="text"/>
              </div>
              <div className="box3c">
                <h3>E-mail</h3>
                <input type="text"/>
              </div>
              <div className="box4c">
                <h3>主旨</h3>
                <input type="text"/>
              </div>
              <div className="box5c">
                <h3>內容</h3>
                <input type="text"/>
              </div>
            </div>

            <div className="box6c">
              <button>
                <p>送出</p>
              </button>
            </div>
          </div>
        </div>


        {/* 裝飾區   */}
        <figure class="pic1"><img src="./images/tape-1.png" alt=""/></figure>
        <figure class="pic2"><img src="./images/tape-1.png" alt=""/></figure>
        <figure class="pic3"><img src="./images/postmask-5.png" alt=""/></figure>
        <figure class="pic4"><img src="./images/flowers-2.png" alt=""/></figure>
        <figure class="pic5"><img src="./images/postmark-1.png" alt=""/></figure>
        <figure class="pic6"><img src="./images/small_paper-3.png" alt=""/></figure>
        <figure class="pic7"><img src="./images/flowers-3.png" alt=""/></figure>

      </main>

      {/* 頁尾區  */}
      <footer className="footer">
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </footer>
    </div>
  )
}
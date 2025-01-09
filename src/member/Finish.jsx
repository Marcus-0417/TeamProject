import Navbar from "../Navbar";
import "./scss/finish.scss";
export default function Finish() {
  return (
    <div id="finishPage">
      <Navbar />
      <main id="finishMain">
        <div id="finish-box">
          <img src="./images/p4-papers-1.png" alt="" className="finish-bg"/>
          <div className="finish-content">
            {/* 勾勾動畫  */}
            <div id="ck-animation">
              <svg width="150" height="150">
                <circle
                  fill="none"
                  stroke="#8A5D3B"
                  strokeWidth="8"
                  cx="75"
                  cy="75"
                  r="71.25"
                  strokeLinecap="round"
                  transform="rotate(-45 75 75)"
                  className="finish-circle" />
                <polyline
                  fill="none"
                  stroke="#8A5D3B"
                  strokeWidth="12"
                  points="33,80.25 64.875,106.5 114,51.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="finish-tick" />
              </svg>
            </div>


            <div className="f-content-p">
              <p>歡迎加入郵你真好!</p>
              <p>開始你的明信片旅遊吧!</p>
            </div>

          </div>
        </div>
        <div className="f-bottom-p">
          <p>點選任一空白處即可跳回首頁</p>
        </div>



      </main>
      {/* 裝飾背景 */}

      <figure className="fin-img01">
        <img src="./images/postmask-8.png" alt=""/>
        </figure>

      <figure className="fin-img02">
        <img src="./images/small_paper-2.png" alt=""/>
        </figure>

      <figure className="fin-img03">
        <img src="./images/paper_clip-red.png" alt=""/>
        </figure>


   <footer>
        <div>
          <p>郵你真好 &copy; 2024 postcard.com</p>
        </div>

      </footer>
  </div >
  )
}
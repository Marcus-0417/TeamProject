
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "../pc/css/PC-index.css"

export default function PcIndex() {

  return (
    <div id="pcIndexPage">
      <Navbar />
      {/* 主要內容區 */}
      <main id="pcIndexPage-main">
        <aside>
          <div id="pcIndexPage-sidebar">
            {/* 寄件區  */}
            <div className="sidebar-item01 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <h2><a href="./post.html">寄件區</a></h2>
            </div>
            {/* 紀錄區  */}
            <div className="sidebar-item02 button-grow-shadow">
              <img src="./images/btn-3.svg" alt="" />
              <h2><a href="./receive_record.html">紀錄</a></h2>

            </div>
          </div>


        </aside>


        {/* 內容區 */}
        <div id="pcIndexPage-rule-box">
          <img src="./images/p2-papers-1.jpg" alt="" />
          <div className="pcIndexPage-rule-title">
            <img src="./images/規.svg" alt="" />
            <img src="./images/則.svg" alt="" />
            <img src="./images/說.svg" alt="" />
            <img src="./images/明.svg" alt="" />
          </div>
          <div className="pcIndexPage-rule">

            <p>1. 點擊開始配對：郵你真好為您<span>隨機選擇</span>一位用戶來寄送明信片，他們將與您共享其地址與一些詳細資料。每一張明信片提供一組不重複的序號（如#12345），用於標識您將要發送的明信片ID。</p>
            <p>2. 請記得在明信片上寫上明信片ID、郵遞區號、地址和收件人名稱。</p>
            <p>3.若您有收到來自其他用戶的明信片，請記得前往<span>記錄</span>中的<span>「明信片ID」</span>填寫明信片ID喔！
            </p>
          </div>
        </div>

        <div id="pcIndexPage-taiwan">
          <img src="./images/taiwan_picture.svg" alt="" />
          {/* 離島 */}
          <div id="pcIndexPage-islands" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover1')"></button>

          <div id="popover1" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="pcIndexPage-total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="pcIndexPage-rankings"></div>

          </div>
        </div>
        </div>
        {/* 北部 */}
        <div id="pcIndexPage-north" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover2')"></button>

          <div id="popover2" className="popover">
            <div class="popover-title">
              <img src="./images/寄.svg" alt="" />
              <img src="./images/件.svg" alt="" />
              <img src="./images/總.svg" alt="" />
              <img src="./images/數.svg" alt="" />

            </div>
            <div className="pcIndexPage-total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt="" />
              <img src="./images/行.svg" alt="" />
              <img src="./images/榜.svg" alt="" />
            </div>
            <div className="pcIndexPage-rankings"></div>

          </div>
        </div>

        {/* 中部 */}
        <div id="pcIndexPage-central" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover3')"></button>

          <div id="popover3" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt="" />
              <img src="./images/件.svg" alt="" />
              <img src="./images/總.svg" alt="" />
              <img src="./images/數.svg" alt="" />

            </div>
            <div className="pcIndexPage-total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt="" />
              <img src="./images/行.svg" alt="" />
              <img src="./images/榜.svg" alt="" />
            </div>
            <div className="pcIndexPage-rankings"></div>

          </div>
        </div>
        {/* 南部 */}
        <div id="pcIndexPage-south" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover4')"></button>

          <div id="popover4" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt="" />
              <img src="./images/件.svg" alt="" />
              <img src="./images/總.svg" alt="" />
              <img src="./images/數.svg" alt="" />

            </div>
            <div className="pcIndexPage-total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt="" />
              <img src="./images/行.svg" alt="" />
              <img src="./images/榜.svg" alt="" />
            </div>
            <div className="pcIndexPage-rankings"></div>

          </div>
        </div>
        {/* 東部 */}
        <div id="pcIndexPage-east" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover5')"></button>

          <div id="popover5" class="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt="" />
              <img src="./images/件.svg" alt="" />
              <img src="./images/總.svg" alt="" />
              <img src="./images/數.svg" alt="" />

            </div>
            <div className="pcIndexPage-total">
              <div className="r-title">
                <img src="./images/排.svg" alt="" />
                <img src="./images/行.svg" alt="" />
                <img src="./images/榜.svg" alt="" />
              </div>
              <div className="pcIndexPage-rankings"></div>

            </div>
          </div>

        </div>

        <div id="pcIndexPage-button-pair">
          <Link to="/Post"> <button >開始配對</button></Link>
         
        </div>

      </main>

      {/* 裝飾區 */}
      {/* 白花 */}
      <figure className="pcIndexPage-img01">
        <img src="./images/flowers-2.png" alt="" />
      </figure>
      {/* APPROVED印章  */}
      <figure className="pcIndexPage-img02"><img src="./images/postmark-2.svg" alt="" />
      </figure>
      {/* 郵票  */}
      <figure class="pcIndexPage-img03"><img src="./images/stamp-7.png" alt="" />
      </figure>
      {/* UPDATE印章  */}
      <figure className="pcIndexPage-img04"><img src="./images/postmark-3.png" alt="" />
      </figure>
      {/* rule-box左下的紙  */}
      <figure className="pcIndexPage-img05"><img src="./images/small_paper-3.png" alt="" />
      </figure>

      {/* 頁尾區 */}
      <footer className="pcIndexPage-footer">
        <div>
          <p>郵你真好 &copy; 2024 postcard.com</p>
        </div>
      </footer>
    </div>

  )
}
import Navbar from "../Navbar";
import "../pc/css/post.css"

export default function Post(){

return(
  <div id="postPage">
  <Navbar/>
  {/* 主要內容區 */}
     <main id="postPage-main">
      <aside>
        <div id="postPage-sidebar">
          {/* 寄件區  */}
          <div className="sidebar-item01 button-grow-shadow ">
            <img src="./images/btn-3.svg" alt=""/>
            <h2><a href="./post.html">寄件區</a></h2>
          </div>
         {/* 紀錄區 */}
          <div className="sidebar-item02 button-grow-shadow ">
            <img src="./images/btn-3.svg" alt=""/>
            <h2><a href="./receive_record.html">紀錄</a></h2>

          </div>
        </div>


      </aside>


      {/* 內容區  */}
      <div id="postPage-post-box">
        <img src="./images/p2-papers-1.jpg" alt=""/>
        {/* 地區、收件、寄件 */}
        <div id="postPage-p-content">
          <div className="p01">
            <img src="./images/p01.svg" alt=""/>
            <img src="./images/P01-2.svg" alt=""/>
            <div className="p-box">
              <p>台北市</p>
            </div>
          </div>
          <div className="p02">
            <img src="./images/P02.svg" alt=""/>
            <img src="./images/P02-2.svg" alt=""/>
            <div class="p-box">
              <p>27封</p>
            </div>
          </div>

          <div className="p03">
            <img src="./images/P03.svg" alt=""/>
            <img src="./images/P03-2.svg" alt=""/>
            <div className="p-box">
              <p>13封</p>
            </div>
          </div>

        </div>
        {/* 頭像、id  */}

        <div className="postPage-photo-frame">
          <img src="./images/stamp-2.png" alt=""/>
        </div>
        <div className="postPage-photo">
          <img src="./images/girl.png" alt=""/>
        </div>

        <div className="postPage-person-id">
          <p>@hsuannnn111</p>
        </div>

        <div className="postPage-send-postcard">
          <p>對方最近寄出的明信片</p>
          <div class="pc01">
            <div class="pc01-frame">
              <img src="./images/stamp-2.png" alt=""/>
            </div>
            <div class="pc01-photo">
              <img src="./images/postcard-taipei101-sunrise-1.jpg" alt=""/>
            </div>
          </div>

          <div class="pc02">
            <div class="pc02-frame">
              <img src="./images/stamp-2.png" alt=""/>
            </div>
            <div class="pc02-photo"> <img src="./images/postcard-beach.jpg" alt=""/></div>
          </div>

        </div>

        <div class="postPage-about-other">
          <img src="./images/關於對方區塊.svg" alt=""/>
          <div class="postPage-other-title">
            <img src="./images/主題區塊.svg" alt=""/>
          </div>
          <p>你好~我很喜歡拍照，所以喜歡蒐集有動物以及古蹟、建築物的明信片!
            我會懷著期待的心情等待的，期待收到漂亮的明信片!</p>
         
        </div>
        <div class="postPage-other-content">
          <div class="postPage-other-id">
            <h2>明信片 ID : #123abcd4</h2>
            <small>不要忘記把明信片ID寫在明信片上喔!!!</small>
          </div>
          <div class="postPage-other-name">
            <p>配對者 : 辛郝蕾</p>
            <p>地址:</p>
            <p>100025 台北市中正區濟南路一段 321號 </p>
          
          </div>

        </div>
      </div>





      <div id="postPage-taiwan">
        <img src="./images/taiwan_picture.svg" alt=""/>

        <div id="postPage-islands" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover1')"></button>

          <div id="popover1" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="rankings"></div>

          </div>
        </div>
        </div>


        <div id="postPage-north" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover2')"></button>

          <div id="popover2" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="rankings"></div>

          </div>
        </div>
        <div id="postPage-central" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover3')"></button>

          <div id="popover3" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="rankings"></div>

          </div>
        </div>

        <div id="postPage-south" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover4')"></button>

          <div id="popover4" className="popover">
            <div className="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="rankings"></div>

          </div>
        </div>
        <div id="postPage-east" className="point">
          <button onclick="togglePopoverWithDynamicPosition(event, 'popover5')"></button>

          <div id="popover5" className="popover">
            <div class="popover-title">
              <img src="./images/寄.svg" alt=""/>
              <img src="./images/件.svg" alt=""/>
              <img src="./images/總.svg" alt=""/>
              <img src="./images/數.svg" alt=""/>

            </div>
            <div className="total"></div>
            <div className="r-title">
              <img src="./images/排.svg" alt=""/>
              <img src="./images/行.svg" alt=""/>
              <img src="./images/榜.svg" alt=""/>
            </div>
            <div className="rankings"></div>

          </div>
        </div>
        </main>

{/* 裝飾區  */}
   {/* 白花  */}
    <figure className="postPage-img01">
      <img src="./images/flowers-2.png" alt=""/>
    </figure>
 {/* APPROVED印章  */}
    <figure className="postPage-img02"><img src="./images/postmark-2.svg" alt=""/>
    </figure>
    {/* 多張郵票  */}
    <figure className="postPage-img03"><img src="./images/stamps.svg" alt=""/>
    </figure>
     {/* UPDATE印章 */}
    <figure className="postPage-img04"><img src="./images/postmark-3.png" alt=""/>
    </figure>
    {/* rule-box左下的紙  */}
    <figure className="postPage-img05"><img src="./images/small_paper-3.png" alt=""/>
    </figure>

  {/* 頁尾區 */}
    <footer className="postPage-footer">
      <div>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </div>
    </footer>
  </div>
      


   


)

}
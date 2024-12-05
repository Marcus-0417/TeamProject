import '../scss/style.scss'

function App() {

  return (
    <body>

      {/* 頁首區 */}
      <header id="topbar">
        {/* Logo */}
        <h1><a href="./index.html">郵你真好</a></h1>
        <nav>
          <ul className="menu">
            <li><a href="">首頁</a></li>
            <li><a href="">配對明信片</a></li>
            <li><a href="">商店</a></li>
            <li><a href="">會員專區</a></li>
            <li><a href="">關於</a></li>
          </ul>
        </nav>
      </header>

      {/* 內容區 */}

      <main>
        {/* 第一層 */}
        <div id='layer1'>
          <div><img className='stamp' src="./public/images/layer1/stamp-4.png" alt="" /></div>
          <div className='text'>
            <p className='text-TW'>郵你真好</p>
            <p className='text-EN'>Send a postcard to convey warmth.</p>
          </div>
          <div><img className='stamp' src="./public/images/layer1/stamp-3.png" alt="" /></div>

        </div>

        {/* 第二層 */}
        <div id='layer2'>
          <div><img className='layer2-1' src="./public/images/layer2/stamp-5.png" alt="" /></div>
          <div className='layer2-2'>
            <img src="./public/images/layer2/btn-1.jpg" alt="" />
            <div className='text'>
              <p id='text1'>希望能在忙碌的生活中</p>
              <p id='text2'>找到與你共頻的人</p>
              <p id='text3'>一起分享生活中的美好</p>
            </div>
          </div>
          <div><img className='layer2-3' src="./public/images/layer2/stamp-6.jpg" alt="" /></div>

        </div>

        {/* 第三層 */}
        <div id='layer3'>
          <div>
            <div className='layer3-1'>
              <img className='layer3-1-img1' src="./public/images/layer3/p1-papers-2.jpg" alt="" />
              <div className='text1'>
                <p id='text4'>已經迫不及待想與別人分享生活了嗎?<br />點選這裡就可以直接交流啦 !</p>
                <p id='text5'>開始<br />你的明信片旅程吧！</p>
              </div>
            </div>
            <div>
              <img className='layer3-1-img2' src="./public/images/layer3/tape-2.png" alt="" />
              <img className='layer3-1-img3' src="./public/images/layer3/p4-papers-1.png" alt="" />
            </div>
            <img className='layer3-1-img4' src="./public/images/layer3/postmask-5.png" alt="" />
          </div>

          <div className='layer3-2'>
            <img src="./public/images/layer3/bar1.png" alt="" />
            <img src="./public/images/layer3/Rectangle 191.png" alt="" />
          </div>

          <div className='layer3-3'>
            <img src="./public/images/layer3/bar2.png" alt="" />
            <img src="./public/images/layer3/Rectangle-191.png" alt="" />
          </div>
        </div>

      </main>
      {/* 裝飾郵戳 */}
      <figure><img className="stampLeft" src="./Public/images/postmark-1.png" alt="左郵戳" /></figure>
      <figure><img className="stampRight" src="./Public/images/postmark-1.png" alt="右郵戳" /></figure>
    </body>
  )
}

export default App
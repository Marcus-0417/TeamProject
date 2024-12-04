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
          <div><img className='stamp' src="./Public/images/stamp-4.png" alt="" /></div>
          <div className='text'>
            <p className='text-TW'>郵你真好</p>
            <p className='text-EN'>Send a postcard to convey warmth.</p>
          </div>
          <div><img className='stamp' src="./Public/images/stamp-3.png" alt="" /></div>
          {/* 裝飾郵戳 */}
          <div><img id="stampLeft" src="./Public/images/postmark-1.png" alt="左郵戳" /></div>
          <div><img id="stampRight" src="./Public/images/postmark-1.png" alt="右郵戳" /></div>
        </div>

        {/* 第二層 */}
        <div id='layer2'>
          <div><img className='layer2-1' src="./Public/images/stamp-5.png" alt="" /></div>
          <div className='layer2-2'>
            <img src="./Public/images/btn-1.jpg" alt="" />
            <div className='text'>
            <p id='text1'>希望能在忙碌的生活中</p>
            <p id='text2'>找到與你共頻的人</p>
            <p id='text3'>一起分享生活中的美好</p>
            </div>

          </div>
          <div><img className='layer2-3' src="./Public/images/stamp-6.jpg" alt="" /></div>

        </div>
      </main>
    </body>
  )
}

export default App
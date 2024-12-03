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
          <figure><img src="./Public/images/stamp-4.png" alt="" /></figure>
          <p>郵你真好</p>
          <p>Send a postcard to convey warmth.</p>
          <figure><img src="./Public/images/stamp-3.png" alt="" /></figure>
          {/* 裝飾郵戳 */}
          <figure id="stampLeft"><img src="./Public/images/postmark-1.png" alt="左郵戳" /></figure>
          <figure id="stampRight"><img src="./Public/images/postmark-1.png" alt="右郵戳" /></figure>
        </div>




      </main>
    </body>
  )
}

export default App
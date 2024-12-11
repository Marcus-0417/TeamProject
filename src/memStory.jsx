import '../scss/memStory.scss'

function App() {

  return (
    <body>

      {/* 頁首區 */}
      <header id="topbar">
        {/* Logo */}
        <div id="logo">
          <img id="img-logo" src="./public/images/logo.png" alt="" />
          <h1><a href="./index.html">郵你真好</a></h1>
        </div>
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
        <div id='layer1'>
          <img id='bar1-1' src="./images/layer3/Rectangle_205.png" alt="" />
          <p id='text1-1'>用</p>
          <img id='bar1-2' src="./images/layer3/Rectangle_206.png" alt="" />
          <p id='text1-2'>戶</p>
          <img id='bar1-3' src="./images/layer3/Rectangle_207.png" alt="" />
          <p id='text1-3'>故</p>
          <img id='bar1-4' src="./images/layer3/Rectangle_208.png" alt="" />
          <p id='text1-4'>事</p>
        </div>
      </main>

      <footer>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </footer>
    </body>
  )
}

export default App
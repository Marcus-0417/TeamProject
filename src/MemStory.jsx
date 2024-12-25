import '../scss/MemStory.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function MemStory() {

  return (
    <div id="MemStory">
      <Navbar />

      {/* 內容區 */}
      <main id="MemStory-main">
        <div id='section1'>
          <Link to="/"><img id='backToMainPage' src="./images/MemStoryPage/arrow.png" alt="" /></Link>
          <img id='section1-img1' src="./images/memStory/stamp-7.png" alt="" />
          <img id='section1-img2' src="./images/memStory/stamp-8.png" alt="" />
          <img id='bar1-1' src="./images/layer3/Rectangle_205.png" alt="" />
          <p id='text1-1'>用</p>
          <img id='bar1-2' src="./images/layer3/Rectangle_206.png" alt="" />
          <p id='text1-2'>戶</p>
          <img id='bar1-3' src="./images/layer3/Rectangle_207.png" alt="" />
          <p id='text1-3'>故</p>
          <img id='bar1-4' src="./images/layer3/Rectangle_208.png" alt="" />
          <p id='text1-4'>事</p>
        </div>

        <div id="section2">
          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame1"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame2"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <Link to="/MemStoryPage"><p className='text3'>閱讀更多</p></Link>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame3"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame4"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <img id='section2-img1' src="./images/memStory/flowers-2.png" alt="" />
          <img id='section2-img2' src="./images/memStory/small_paper-3.png" alt="" />
          <img id='section2-img3' src="./images/memStory/stamp-9.png" alt="" />
          <img id='section2-img4' src="./images/memStory/arrow.png" alt="" />
          <img id='section2-img5' src="./images/memStory/arrow.png" alt="" />
        </div>
      </main>

      <footer>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </footer>

    </div>
  )
}

export default MemStory

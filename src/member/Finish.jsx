import { useEffect } from "react";
import Navbar from "../Navbar";
import "./scss/finish.scss";
export default function Finish() {
  useEffect(()=>{
    // 加載 jQuery
    const jQueryScript = document.createElement('script');
    jQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js';
    jQueryScript.async = true;
    document.body.appendChild(jQueryScript);

    // 加載 GSAP
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js';
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    // 加載自己的 JS
    const customScript = document.createElement('script');
    customScript.src = '../js/ckAnimation.js'; 
    customScript.async = true;
    document.body.appendChild(customScript);

    // 清理腳本，避免重複加載
    return () => {
      document.body.removeChild(jQueryScript);
      document.body.removeChild(gsapScript);
      document.body.removeChild(customScript);
    };
  },[])
  return (
    <div id="finishPage">
      <Navbar />
      <main id="finishMain">
        <div id="finish-box">
          <img src="./images/p4-papers-1.png" alt="" className="finish-bg"/>
          <div className="finish-content">
            {/* 勾勾動畫  */}
            <div id="ck-animation">
            <img className="finish-approved" src="./images/success-stamp.png"/>
             
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
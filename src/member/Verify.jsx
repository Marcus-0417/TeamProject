import { useEffect } from "react";
import Navbar from "../Navbar";
import "./scss/verify.scss";

export default function Verify(){
  useEffect(() => {
    // const jQ = document.createElement('script');
    // jQ.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    // jQ.defer = true; // 確保腳本在 HTML 解析完後執行
    // document.body.appendChild(jQ);

    const VerifyScript = document.createElement('script');
    VerifyScript.src = '../js/Vcode.js';
    VerifyScript.async = true;
    document.body.appendChild(VerifyScript);

    return () => {
      document.body.removeChild(VerifyScript); // 卸載腳本避免衝突
      // document.body.removeChild(jQ);
    };
  }, [])
  return(
    <div id="verifyPage">
      <Navbar/>
      <main id="verify-main">
      <h2>找回密碼<br/>為了您帳號的安全，請進行驗證</h2>
      <div id="verify-code">
        <img src="./images/p4-papers-1.png" alt=""/>
        <p className="verify-remind">請注意英文大小寫</p>
        <div className="verify-input_block">
        {/* 產生驗證碼區 */}
          <canvas id='auth-code'></canvas>

          <div className="verify-input-code">
            {/* 換圖按鈕  */}
            <button id='reBtn'><img src="./images/change_icon.svg" alt=""/></button>
           {/* 輸入驗證碼區塊  */}
            <input id="validText" type="text" placeholder="請輸入驗證碼" />
            <p id="verify_code">驗證碼<span>*</span></p>
          </div>


          <span id="validResult "style={{color:"red"}}></span>
        </div>

        <button type="submit" name="sure-btn" id="verify-sure-btn" value="確定">確定</button>


      </div>

    </main>
    {/* 背景插圖 */}
    {/* 左下角角落 */}
    <figure className="verify-img01">
      <img src="./images/small_paper-4.svg" alt=""/>
    </figure>
       {/* 左下角花 */}
    <figure className="verify-img02">
      <img src="./images/flowers-1.png" alt=""/>
    </figure>
     {/* 驗證碼區的印章 */}
    <figure className="verify-img03">
      <img src="./images/postmark-1.png" alt=""/>
    </figure>
     {/* 左中的紙  */}
    <figure className="verify-img04">
      <img src="./images/small_paper-3.png" alt=""/>
    </figure>
     {/* 左邊的花  */}
    <figure className="verify-img05">
      <img src="./images/flowers-3.png" alt=""/>
    </figure>

    <footer>
      <div>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </div>
    </footer>

    </div>
  )
}
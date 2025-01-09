import Navbar from "../Navbar";
import "./scss/passwordR.scss";
export default function PasswordR() {
  return (
    <div id="password-r-Page">
      <Navbar />
      <main id="password-r-main">
      <h2>找回密碼<br/>請輸入您註冊時使用的E-mail</h2>
      <div id="pr-email-box">
        <img src="./images/p4-papers-1.png" alt=""/>
        <div className="pr-input-email">
          <input type="email" name="email" id="pr-email" title="Email" placeholder="您的E-mail" required autoFocus/>
          <button type="submit" name="sure-btn" id="pr-sure-btn" value="確定" onclick="location.href='./v-code.html'">確定</button>

        </div>
      </div>
      
    </main>
    {/* 背景插圖  */}
     <figure  className="pr-img01">
      <img src="./images/small_paper-4.svg" alt=""/>
    </figure>
    <figure  className="pr-img02">
      <img src="./images/flowers-1.png" alt=""/>
    </figure>
    <figure  className="pr-img03">
      <img src="./images/postmark-1.png" alt=""/>
    </figure>
    
    <figure className="pr-img04">
      <img src="./images/small_paper-3.png" alt=""/>
    </figure>
    <figure  className="pr-img05">
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
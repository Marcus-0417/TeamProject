import { useEffect } from "react";
import Navbar from "../Navbar";
import "./scss/apply.scss";
import { Link } from "react-router-dom";
export default function Apply() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/district.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 卸載腳本避免衝突
    };
  }, [])
  
  
    return (
      <div id="applyPage">
        <Navbar />
        <main id="apply-Main">
          <article className="apply-article">加入郵你真好大家庭!!!</article>
          <form action="" method="post" name="member-form" id="member-form" title="會員申請資料">
            <div className="apply-box">
              <label htmlFor="username">真實姓名:</label>
              <input type="text" name="username" id="username" title="真實姓名" placeholder="請輸入真實姓名" required autoFocus />
            </div>
            <div className="apply-box">
              <label htmlFor="email">*E-mail:</label>
              <input type="email" name="email" id="email" title="Email" placeholder="請輸入email" required autoFocus />

            </div>
            <div className="apply-box">
              <label htmlFor="password">密碼:</label>
              <input type="password" name="password" id="password" title="重設密碼" placeholder="請輸入6~8混合英文數字" required
                autoFocus />
              <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>

            </div>
            <div className="apply-box">
              <label htmlFor="re-password">再次確認密碼:</label>
              <input type="password" name="password" id="re-password" title="再次確認密碼" placeholder="請輸入6~8混合英文數字" required
                autoFocus />
              <small>請使用8~20位的英文大小寫、數字、特殊符號等2種以上組合</small>
            </div>

            {/* 地址下拉選單 */}
            <div id="district-box">

              <label htmlFor="district">地址:</label>
              <div className="dropdown">

                <select name="county" id="county_box">

                  <option value="">選擇縣市</option>
                </select>

                <select name="district" id="district_box">
                  <option value="">選擇鄉鎮市區</option>
                </select>

                <input type="text" id="address_box" placeholder="請填寫完整地址" />
              </div>
            </div>

            <div className="box_check">
              <input type="checkbox" name="agree" id="agree" title="我同意" value="我同意" />
              <label htmlFor="agree">我同意郵你真好使用協議</label>

            </div>

            <div className="a-btn">
              <Link to="/Finish"> <button type="submit" value="Submit" name="submit-btn" id="submit-btn" onClick="">送出</button>
              </Link>
             
            </div>

          </form>

        </main>
        {/* 背景插圖  */}
        <figure className="a-img01">
          <img src="./images/small_paper-3.png" alt="" />
        </figure>
        <figure className="a-img02">
          <img src="./images/flowers-1.png" alt="flower" />
        </figure>
        <figure className="a-img03">
          <img src="./images/flowers-3.png" alt="flower" />
        </figure>
        <figure className="a-img04">
          <img src="./images/BIRD.png" alt="flower" />
        </figure>


        <footer>
          <div>
            <p>郵你真好 &copy; 2024 postcard.com</p>
          </div>
        </footer>


      </div>
    )
  }
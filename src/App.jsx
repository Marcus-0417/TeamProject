import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MemStory from "./MemStory";
import MainPage from "./MainPage";
import MemStoryPage from "./MemStoryPage";
import About from "./about/about";
import Qa from "./about/Qa";
import Content from "./about/Content";
import MemberIndex from "./member/MemberIndex";
import Apply from "./member/Apply";
import Finish from "./member/Finish";
import MemberData from "./member/memberData";
import PasswordR from "./member/PasswordR";
import Verify from "./member/verify";
import NoMail from "./member/NoMail";
import NoMail_R from "./member/NoMail_R";
import NewPassword from "./member/NewPassword";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 首頁 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
        <Route path="/MemStoryPage" element={<MemStoryPage />} />

        {/* 會員專區頁面*/}
        <Route path="/MemberIndex" element={<MemberIndex />} />
        <Route path="/Apply" element={<Apply />} />

        <Route path="/memberData" element={<MemberData />} />
        <Route path="/PasswordR" element={<PasswordR />} />
        <Route path="/Finish" element={<Finish />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/NoMail" element={<NoMail />} />
        <Route path="/NoMail_R" element={<NoMail_R />} />
        <Route path="/NewPassword" element={<NewPassword />} />


        {/* 關於頁面 */}
        <Route path="/About" element={<About />} />
        <Route path="/Qa" element={<Qa />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
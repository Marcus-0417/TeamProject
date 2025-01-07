import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MemStory from "./MemStory";
import MainPage from "./MainPage";
import MemStoryPage from "./MemStoryPage";
import About from "./about/about";
import Qa from "./about/Qa";
import Content from "./about/Content";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
        <Route path="/MemStoryPage" element={<MemStoryPage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Qa" element={<Qa/>}/>
        <Route path="/Content" element={<Content/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
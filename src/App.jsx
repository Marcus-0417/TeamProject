import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MemStory from "./MemStory"
import MainPage from "./MainPage";
import MemStoryPage from "./MemStoryPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
        <Route path="/MemStoryPage" element={<MemStoryPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
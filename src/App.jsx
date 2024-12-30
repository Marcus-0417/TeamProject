import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MemStory from "./MemStory"
import MainPage from "./MainPage";
import MemStoryPage from "./MemStoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
        <Route path="/MemStoryPage" element={<MemStoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
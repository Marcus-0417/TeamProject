import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemStory from "./MemStory";
import MainPage from "./MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
      </Routes>
    </Router>
  );
};

export default App;
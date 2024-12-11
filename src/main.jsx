import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import MemStory from './MemStory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/MemStory" element={<MemStory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import  './assets/fonts/static/pretendard.css'
import './base.css';
import Header from './components/Header';
import HomeContent from './pages/Home';
import AboutContent from './pages/About';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header>헤더헤더헤더</Header>
    <div className='body-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent/>}></Route>
          <Route path="/about/:mbti/" element={<AboutContent/>}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from "./components/DashboardPage";
import MailBox from "./components/MailBox";
import Mail from "./components/Mail";
import SentMailsList from "./components/SentMailsList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/sent' element={<SentMailsList/>}/>
          <Route exact path='/mail' element={<Mail/>}/>
          <Route exact path='/' element={<LoginForm />}></Route>
          <Route exact path='/dashboard' element={<DashboardPage />}></Route>
          <Route exact path='/mailBox' element={<MailBox/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

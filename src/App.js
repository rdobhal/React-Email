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
        <Route  path='/' element={<LoginForm />}></Route>
        <Route  path='/sent' element={<SentMailsList />} />
        <Route  path='/mail' element={<Mail/>}/>
        <Route  path='/dashboard' element={<DashboardPage />}></Route>
        <Route  path='/mailBox' element={<MailBox />}></Route>
        <Route  path='/logout' element={<LoginForm/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

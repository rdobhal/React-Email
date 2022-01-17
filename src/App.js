import "./App.css";
import MailHeader from "./components/Headers/MailHeader";
import SideBar from "./components/Sidebars/SideBar";
import MailBody from "./components/MailBody/MailBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginScreen/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";


const DashboardPage = () => {
  return (
    <div>
      <div className="App">
        <SideBar />
        <div className="mailheader__mailbody">
          <MailHeader className="mail__header" />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
const MailBoxPage = () => {
  return (
    <div>
      <div className="App">
        <SideBar />
        <div className="mailheader__mailbody">
          <MailHeader className="mail__header" />
          <MailBody/>
        </div>
      </div>
    </div>
  );
};

const SentMailsPage = () => {
  let trigger = true;
  return (
    <div>
      <div className="App">
        <SideBar />
        <div className="mailheader__mailbody">
          <MailHeader className="mail__header" />
          <MailBody trig={trigger}/>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path='/dashboard' element={<DashboardPage />}></Route>
        <Route path='/mailBox' element={<MailBoxPage />}></Route>
        <Route path='/logout' element={<LoginForm />}></Route>
        <Route  path='/sent' element={<SentMailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import AppLayout from "./components/AppLayout";
import {useEffect} from "react";
import Profile from "./pages/Profile";
import './css/common.css'
import Resume from "./pages/Resume";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  useEffect(() => {
      document.title = "안녕하세요! 김태훈입니다. | 웹 개발";
  }, []);


  return (
      <AppLayout>
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="/pages/resume" element={<Resume />}/>
        </Routes>
      </AppLayout>

  );
}

export default App;

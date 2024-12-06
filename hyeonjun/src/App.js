import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; // CSS 파일 import
import Intro from "./pages/Intro";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";
import TechStack from "./pages/TechStack";
import TooMuchInfo from "./pages/TooMuchInfo";
import Pages from "./pages/Pages";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/" element={<Pages />}>
          <Route path="main" element={<Main />} />
          <Route path="techstack" element={<TechStack />} />
          <Route path="info" element={<TooMuchInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

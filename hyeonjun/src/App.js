import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'; // CSS 파일 import
import Intro from "./pages/Intro";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";
import TechStack from "./pages/TechStack";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/techstack" element={<TechStack/>}/>
          
      
      </Routes>
    </BrowserRouter>
    // <>
    //   <div className='container'>
    //     <div className='profile'>
    //       <h1 className="jaro-heading">Jaro 폰트 예제</h1>
    //       <p className="jaro-paragraph">이 문장은 Jaro 폰트를 사용하고 있습니다.</p>
    //     </div>
    //   </div>
    // </>
    
    
  );
}

export default App;

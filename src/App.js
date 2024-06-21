import './App.css';
import { Navbar } from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contectus } from './Component/Contectus';
import { Aboutus } from './Component/Aboutus';
import { Login } from './Component/Login';
import { Mainmenu } from './Component/Mainmenu';
import { Reacthome } from './Component/Pages/Reacthome';
import { ReactIntro } from './Component/Pages/ReactIntro';
import { ReactUpgrade } from './Component/Pages/ReactUpgrade';
import { ReactES6 } from './Component/Pages/ReactES6';
import { Footer } from './Component/Footer';
import ReactEs6Destructuring from './Component/Pages/ReactEs6Destructuring';
import Dom from './Component/Pages/DomIntroduction';
import VirtualDomIntroduction from './Component/Pages/ VirtualDomIntroduction';
import ReactProps from './Component/Pages/ReactProps';
import ReactComponents from './Component/Pages/ReactComponents';
import ReactHooks from './Component/Pages/ReactHooks';
import AxiosPage from './Component/Pages/AxiosPage';
import Redux from './Component/Pages/Redux';
import Welcome from './Component/Welcome';




function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Mainmenu />
        
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/contectus' element={<Contectus />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='home/reacthome' element={<Reacthome />} />
          <Route path='home/reactintro' element={<ReactIntro />} />
          <Route path='home/reactupgrade' element={<ReactUpgrade />} />
          <Route path='home/reactes6' element={<ReactES6 />} />
          <Route path='home/reactes6destructuring' element={<ReactEs6Destructuring/>} />
          <Route path='home/dom' element={<Dom/>} />
          <Route path='home/vdomIntroduction' element={<VirtualDomIntroduction/>} />
          <Route path='home/props' element={<ReactProps/>} />
          <Route path='home/ReactComponents' element={<ReactComponents/>} />
          <Route path='home/reacthooks' element={<ReactHooks/>} />
          <Route path='home/axios' element={<AxiosPage/>} />
          <Route path='home/redux' element={<Redux/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;

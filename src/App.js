import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contectus } from './Component/Contectus';
import { Aboutus } from './Component/Aboutus';
import { Login } from './Component/Login';
// import { Menu, MenuSection } from '@headlessui/react';
import { Mainmenu } from './Component/Mainmenu';
import { Reacthome } from './Component/Pages/Reacthome';
import { ReactIntro } from './Component/Pages/ReactIntro';
import { ReactUpgrade } from './Component/Pages/ReactUpgrade';
import { ReactES6 } from './Component/Pages/ReactES6';
import { Footer } from './Component/Footer';
import { Footers } from './Component/Footers';



function App() {
  return (
    <>


      <Router>
        <Navbar />
       
        <Mainmenu />
        <Routes>
          <Route path='/contectus' element={<Contectus />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='home/reacthome' element={<Reacthome />} />
          <Route path='home/reactintro' element={<ReactIntro />} />
          <Route path='home/reactupgrade' element={<ReactUpgrade />} />
          <Route path='home/reactes6' element={<ReactES6 />} />
        </Routes>
        {/* <Footers/> */}
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;

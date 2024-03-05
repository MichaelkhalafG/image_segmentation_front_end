import React, { useState } from 'react';
import SAM from './componenets/SAM';
import Navbar from './componenets/Navbar';
import Topnav from './componenets/Topnav';
import Phonenav from './componenets/PhoneNav';
import Messages from './componenets/Messages';
import Setting from './componenets/Setting';
import Assets from './componenets/Assets';
import Login from './componenets/LogIn'
import SignUP from './componenets/SignUp'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './componenets/Services';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [FontSize, setFontSize] = useState("fs-2");

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className='container-fluid m-0 p-0 body'>
        <div className='row m-0 p-0 justify-content-end'>
          {window.innerWidth > 1100 ? <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} /> : null}
          <div className="row col-xl-10 p-0 m-0 col-lg-9 col-md-8 col-12">
            {window.innerWidth > 1100 ? <Topnav isDarkMode={isDarkMode} toggleMode={toggleMode} /> : <Phonenav isDarkMode={isDarkMode} toggleMode={toggleMode} />}
            <div className='px-5 pt-4  d-flex m-0 flex-column row justify-content-center' style={{ overflow: 'hidden' }}>
              <Routes>
                <Route path='/' element={<SAM isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} />} />
                <Route path='/messages' element={<Messages isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} />} />
                <Route path='/setting' element={<Setting isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} />} />
                <Route path='/assets' element={<Assets isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} />} />
                <Route path='/services' element={<Services isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUP />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {/* <Login /> */}
      {/* <SignUP /> */}
    </>
  );
}

export default App;

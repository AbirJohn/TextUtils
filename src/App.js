import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import React, { useState } from 'react'



function App() {

const [mode, Setmode] = useState('light');

  const togglemode = () =>{

    if(mode === 'light'){
      Setmode('dark');
      
      document.body.style.backgroundColor = 'grey';
    
    
    }else{
      Setmode('light');
      document.body.style.backgroundColor = 'white';
    }


  }


  return (
    <>


    <Navbar title = "TextUtils"  mode ={mode}   togglemode ={togglemode}  />
    <div className="container my-3">


    <TextFrom heading = "Enter the text hear" mode ={mode}  />

    {/* <About/> */}

    </div>


</>
  );
}

export default App;

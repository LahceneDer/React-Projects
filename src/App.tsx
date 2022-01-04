import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';



function App() {

  
  return (
    <>

    <div className="App">
      <nav>
        <NavLink className="link" to={"tours"} >
          Tours Project
        </NavLink>
        <br />
        <NavLink className="link" to={"menu"} >
          Menu Project
        </NavLink>
        <br/>
        <NavLink className="link" to={"slider"} >
          Slider Project
        </NavLink>
      </nav>
    </div>
    </>
  );
}

export default App;

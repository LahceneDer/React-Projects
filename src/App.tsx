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
      </nav>
    </div>
    </>
  );
}

export default App;

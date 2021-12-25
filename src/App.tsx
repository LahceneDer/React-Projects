import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import ToursApp from './components/tours/ToursApp';



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

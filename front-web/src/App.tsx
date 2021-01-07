import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div >
      <h1>
        <NavBar/>
        <Home />
      </h1>
    </div>
  );
}

export default App;

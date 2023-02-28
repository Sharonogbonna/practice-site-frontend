import React from 'react';

//components
import Register from './components/Register';
import Login from './components/Login';
//css
import './App.css';
import GetUser from './components/GetUser';

function App() {
  return (
    <div className="App">
     <Register/>
     <Login/>
     <GetUser/>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Loginf from './components/Loginf.js';
function App() {
  return (
    <div className="App">

      <Navbar />
     <Loginf />
    </div>

  );
};

export default App;


// ERROR = [eslint] src\components\loginForm.js Line 5:40: 'React' is not defined no-undef
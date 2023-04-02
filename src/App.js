import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import About from './components/About';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  // const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {

    setAlert(
      {
        msg: message,
        type: type

      })

    setTimeout(() => {
      setAlert(null);

    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'rgb(212 211 245)';
      showAlert("Light Mode has been Enabled", "success");


    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textforms showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


  // "homepage": "https://siddheshcpatil.github.io/wordtext/",

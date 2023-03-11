import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Routing from "./pages/RoutingApp";


function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      <Login />
      <Routes>
        <Route path="/dashboard/*" element=<Dashboard /> />
      </Routes>
    </div>
  );
}

export default App;
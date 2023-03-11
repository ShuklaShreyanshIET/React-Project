import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";

function Routing() {
  
    return (
      <div className="App">
        <Routes>
          <Route path="/" element=<Register /> />
          <Route path="/dashboard" element=<Dashboard /> />
        </Routes>
      </div>
    );
}

export default Routing;
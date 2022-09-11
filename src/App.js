import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import MainFunc from "./components/MainFunc";
import LinksTo from "./components/LinksTo";
import Links from "./components/Links";


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainFunc />} />
          <Route path="/linksto" element={<LinksTo />} />
          <Route path="/links" element={<Links />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

import "./App.css"
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Schedule from "./Schedule";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./Login";
import Profile from "./Profile";
import Team from "./Team";

function App() {
  return (
    <Router>
      <div className="app">
          <div className="header">
            <Header/>
          </div>
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/Schedule' element={<Schedule/>} />
              <Route exact path='/Login' element={<Login/>} />
              <Route exact path='/Profile' element={<Profile/>}/>
              <Route exact path='/Team' element={<Team/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'reset-css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/homepage';
import NavBar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
          <NavBar />
          <div className="App">
              <Router>
                  <div className="">
                      <Routes>
                          <Route
                              path="/"
                              element={
                                  <HomePage />
                              }
                          />
                      </Routes>
                  </div>
              </Router>
          </div>
      </>
  );
}

export default App;

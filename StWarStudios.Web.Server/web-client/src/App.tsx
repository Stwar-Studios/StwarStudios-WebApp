import React from 'react';
import './App.css';
import 'reset-css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/shared/NavBar';
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
                                  <Home />
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

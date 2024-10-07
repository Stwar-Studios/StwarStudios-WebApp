//import { useEffect, useState } from 'react';
import './App.css';
//import AppMenu from './Components/Shared/AppMenu';
//import React, { Component } from 'react';
//import NavbarScroller from './Components/Shared/NavBarScroller';
import 'reset-css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home';
import NavBar from './Components/Shared/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// interface Forecast {
//     date: string;
//     temperatureC: number;
//     temperatureF: number;
//     summary: string;
// }

// App.tsx
// const navigation = {
//     brand: { name: "NavbarScroller", to: "/" },
//     links: [
//       { name: "About Me", to: "/about" },
//       { name: "Blog", to: "/blog" },
//       { name: "Developement", to: "/dev" },
//       { name: "Graphic Design", to: "/design" },
//       { name: "Contact", to: "/contact" },
//     ]
//   }

//function App2() {
    // const [forecasts, setForecasts] = useState<Forecast[]>();

    // useEffect(() => {
    //     populateWeatherData();
    // }, []);

    // const contents = forecasts === undefined
    //     ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //     : <table className="table table-striped" aria-labelledby="tabelLabel">
    //         <thead>
    //             <tr>
    //                 <th>Date</th>
    //                 <th>Temp. (C)</th>
    //                 <th>Temp. (F)</th>
    //                 <th>Summary</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {forecasts.map(forecast =>
    //                 <tr key={forecast.date}>
    //                     <td>{forecast.date}</td>
    //                     <td>{forecast.temperatureC}</td>
    //                     <td>{forecast.temperatureF}</td>
    //                     <td>{forecast.summary}</td>
    //                 </tr>
    //             )}
    //         </tbody>
    //     </table>;

    // return (
    //     <div>
    //         <h1 id="tabelLabel">Weather forecast</h1>
    //         <p>This component demonstrates fetching data from the server.</p>
    //         {contents}
    //     </div>
    // );

    // async function populateWeatherData() {
    //     const response = await fetch('weatherforecast');
    //     const data = await response.json();
    //     setForecasts(data);
    // }

//     return <div className="App">
//     <NavbarScroller />
// </div>
// }
function App()
{ 
    return (
        <>
        <NavBar/>
        <div className="App">
            <Router>
                <div className="">
                    <Routes>
                        <Route
                            path="/"
                            element={
                            <HomePage/>
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
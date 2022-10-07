import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface birdStrikes {
  id: Number;
  airport: String;
  aircraft: String;
  num_strikes: String;
  flight_effect: String;
  flight_date: String;
  damage_effect: String;
  airline: String;
  origin_state: String;
  flight_phase: String;
  precipitation_conditions: String;
  wildlife_remains_collected: String;
  remarks: String;
  wildlife_size: String;
  sky_conditions: String;
  wildlife_species: String;
  pilot_warned: String;
  cost: String;
  altitude: String;
  num_injured: String;
  large_aircraft: String;
}

function App() {
  const [birdStrikes, setBirdStrikes] = useState<birdStrikes>();
  useEffect(() => {
    getMerchant();
  }, []);

  function getMerchant() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        setBirdStrikes(data as any as birdStrikes);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

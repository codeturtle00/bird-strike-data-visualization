import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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

interface stateFreqs {
  origin_state: string;
  data: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [birdStrikes, setBirdStrikes] = useState<birdStrikes[]>([]);
  const [stateFreqs, setStateFreqs] = useState<stateFreqs[]>([]);

  useEffect(() => {
    getStateFreqs();
  }, []);

  function getBirdStrikes() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBirdStrikes(data as any as birdStrikes[]);
      });
  }

  function getStateFreqs() {
    fetch("http://localhost:3001/state-freqs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStateFreqs(data as any as stateFreqs[]);
      });
  }

  const labels = stateFreqs.map((x) => x["origin_state"]);
  const data = stateFreqs.map((x) => x.data);
  console.log(labels);

  return (
    <div>
      <h1>Bird Strikes Visualization</h1>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Bird Strikes by State",
              data: data,
              backgroundColor: "rgba(53, 162, 235, 1)",
            },
          ],
        }}
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
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
import Map from "./components/visualizations/Map";

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
  const [stateFreqs, setStateFreqs] = useState<stateFreqs[]>([]);

  useEffect(() => {
    getStateFreqs();
  }, []);

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
  console.log("Test")
  console.log(stateFreqs);

  return (
    <div>
      <h1>Bird Strikes Visualization</h1>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Number of Incidents by Aircraft model",
              data: data,
              backgroundColor: "rgba(53, 162, 235, 1)",
            },
          ],
        }}
      />
      <Map/>
    </div>
  );
}

export default App;

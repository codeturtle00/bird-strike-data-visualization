import React, { useEffect, useState } from "react";
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
import { INCIDENTS_PER_AIRCRAFT_API } from "../../constants";


interface incidentsPerAircraft {
  aircraft_model: string;
  num_incidents: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function IncidentsPerAircraftBarGraph() {
  const [incidentsPerAircraft, setIncidentsPerAircraft] = useState<incidentsPerAircraft[]>([]);

  const getIncidentsPerAircraft = () => {
    fetch(INCIDENTS_PER_AIRCRAFT_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncidentsPerAircraft(data as any as incidentsPerAircraft[]);
      });
  }

  const labels = incidentsPerAircraft.map((x) => x.aircraft_model);
  const data = incidentsPerAircraft.map((x) => x.num_incidents);
  console.log(labels);

  return (
    <div>
      <h1>Number of Incidents by Aircraft model</h1>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Num. Incidents",
              data: data,
              backgroundColor: "rgba(53, 162, 235, 1)",
            },
          ],
        }}
      />
    </div>
  );
}

export default IncidentsPerAircraftBarGraph;

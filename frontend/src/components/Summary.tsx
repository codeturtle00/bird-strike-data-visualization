import { useState } from "react";
import { FATALITY_RATE, TOTAL_INCIDENTS } from "../constants";

function Summary() {
  const [totalNumIncidents, setTotalNumIncidents] = useState(0);
  const [fatalityRate, setFatalityRate] = useState(0);

  const getStats = () => {
    fetch(TOTAL_INCIDENTS)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalNumIncidents(data);
      });

    fetch(FATALITY_RATE)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFatalityRate(data);
      });
  };

  getStats();

  return (
    <div>
      <h1>Summary</h1>
      <ul>
        <li>Total number of report incidents: {totalNumIncidents}</li>
        <li>Fatality Rate: {fatalityRate}</li>
        <li>(TODO: other interesting stats)</li>
      </ul>
    </div>
  );
}

export default Summary;

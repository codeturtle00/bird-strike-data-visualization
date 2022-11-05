import { useEffect, useState } from "react"
import { FATALITY_RATE, TOTAL_INCIDENTS } from "../constants"

function Summary () {
  const [totalNumIncidents, setTotalNumIncidents] = useState(0)
  const [fatalityRate, setFatalityRate] = useState(0)

  interface totalIncidentsResponse {
    count: string
  }
  interface fatalityRateResponse {
    fatality_rate: number
  }

  const getStats = () => {
    fetch(TOTAL_INCIDENTS)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        console.log(data as totalIncidentsResponse)
      })

    fetch(FATALITY_RATE)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        console.log(data as fatalityRateResponse)

      })
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div>
      <h1>Summary</h1>
      <ul>
        <li>Total number of report incidents: {totalNumIncidents}</li>
        <li>Fatality Rate: {fatalityRate}</li>
        <li>(TODO: other interesting stats)</li>
      </ul>
    </div>
  )
}

export default Summary

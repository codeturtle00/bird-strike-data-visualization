import { useEffect, useState } from "react"
import { FATALITY_RATE, TOTAL_INCIDENTS } from "../constants"

function Summary () {
  const [totalNumIncidents, setTotalNumIncidents] = useState("")
  const [fatalityRate, setFatalityRate] = useState(0.0)

  interface totalIncidentsResponse {
    count: string
  }
  interface fatalityRateResponse {
    fatality_rate: number
  }

  const getStats = () => {
    fetch(TOTAL_INCIDENTS)
      .then(async (response) => response.json())
      .then((data) => {
        const response = data[0] as totalIncidentsResponse
        setTotalNumIncidents(response.count)
      })
      .catch(err => console.log("Error fetching: ", err))

    fetch(FATALITY_RATE)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        const response = data[0] as fatalityRateResponse
        setFatalityRate(response.fatality_rate)
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div>
      <h3>Summary</h3>
      <ul>
        <li>Total number of report incidents: {totalNumIncidents}</li>
        <li>Fatality Rate: {fatalityRate}</li>
        <li>(TODO: other interesting stats)</li>
      </ul>
    </div>
  )
}

export default Summary

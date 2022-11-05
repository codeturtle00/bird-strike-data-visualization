import { useEffect, useState } from "react"
import { FATALITY_RATE, TOTAL_INCIDENTS } from "../constants"


// UI 
interface Props {
  totalNumIncidents: string,
  fatalityRate: number
}

export const SummaryCard: React.FC<Props> = ({totalNumIncidents, fatalityRate}) => {
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

// LOGIC
interface totalIncidentsResponse {
  count: string
}
interface fatalityRateResponse {
  fatality_rate: number
}

function Summary () {
  const [totalNumIncidents, setTotalNumIncidents] = useState("")
  const [fatalityRate, setFatalityRate] = useState(0.0)

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

  return <SummaryCard totalNumIncidents={totalNumIncidents} fatalityRate={fatalityRate}  />
}

export default Summary

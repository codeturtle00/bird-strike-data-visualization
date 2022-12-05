import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { INCIDENTS_BY_FLIGHT_PATH_API } from "../../constants"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface incidentsPerPhase {
    phase: string,
    incidents: string
}

function IncidentsByFlightPhase () {
  const [incidentsByFlightPhase, setIncidentsByFlightPhase] = useState<incidentsPerPhase[]>([])

  const getIncidentsByFlightPhase = () => {
    fetch(INCIDENTS_BY_FLIGHT_PATH_API)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setIncidentsByFlightPhase(data as incidentsPerPhase[])
        console.log(incidentsByFlightPhase)
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getIncidentsByFlightPhase()
  }, []);

  const data = incidentsByFlightPhase.map((x) => parseInt(x.incidents))

  return (
    <div>
      <h3>Number of Incidents by Flight Phase</h3>
      <Bar
        data={{
          labels: ["Take-Off Run", "Departure", "Climb", "En Route", "Descent",
                  "Approach", "Landing", "Taxi", "Arrival", "Parked", "Local"],
          datasets: [
            {
              label: "Num. Incidents",
              data,
              backgroundColor: "rgba(53, 162, 235, 1)"
            }
          ]
        }}
      />
    </div>
  )
}

export default IncidentsByFlightPhase

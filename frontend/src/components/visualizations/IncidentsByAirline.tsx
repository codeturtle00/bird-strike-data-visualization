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
import { INCIDENTS_BY_AIRLINE_API } from "../../constants"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface incidentsPerAirline {
    airline: string,
    incidents: string
}

function IncidentsByAirline () {
  const [incidentsByAirline, setIncidentsByAirline] = useState<incidentsPerAirline[]>([])

  const getIncidentsByAirline = () => {
    fetch(INCIDENTS_BY_AIRLINE_API)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setIncidentsByAirline(data as incidentsPerAirline[])
        console.log(incidentsByAirline)
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getIncidentsByAirline()
  }, []);
  
  const labels = incidentsByAirline.map((x) => x.airline)
  const data = incidentsByAirline.map((x) => parseInt(x.incidents))

  return (
    <div>
      <h3>Number of Incidents by Airline</h3>
      <Bar
        options={{
            indexAxis: 'y' as const,
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Num. Incidents",
              data,
              backgroundColor: "rgba(53, 162, 235, 1)"
            }
          ]
        }}
        
        height={3000}
      />
    </div>
  )
}

export default IncidentsByAirline

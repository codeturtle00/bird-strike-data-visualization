import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { INCIDENTS_BY_MONTH_API } from "../../constants"

interface incidentsPerYear {
    month: string,
    incidents: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function IncidentsByMonth () {
  const [incidentsByMonth, setIncidentsByMonth] = useState<incidentsPerYear[]>([])

  const getIncidentsByMonth = () => {
    fetch(INCIDENTS_BY_MONTH_API)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setIncidentsByMonth(data as incidentsPerYear[])
        console.log(incidentsByMonth)
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getIncidentsByMonth()
  }, []);

  
  const labels = incidentsByMonth.map((x) => x.month)
  const data = incidentsByMonth.map((x) => parseInt(x.incidents))

  return (
    <div>
      <h3>Number of Incidents by Month</h3>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Number of Incidents",
              data,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: "rgba(53, 162, 235, 1)"
            }
          ]
        }}
      />
      *Most birds will have migrated south for the Winter (December - March)
    </div>
  )
}

export default IncidentsByMonth

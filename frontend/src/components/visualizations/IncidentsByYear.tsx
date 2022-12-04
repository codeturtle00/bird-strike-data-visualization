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
import { INCIDENTS_BY_YEAR_API } from "../../constants"

interface incidentsPerYear {
    year: string,
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

function IncidentsByYear () {
  const [incidentsByYear, setIncidentsByYear] = useState<incidentsPerYear[]>([])

  const getIncidentsByYear = () => {
    fetch(INCIDENTS_BY_YEAR_API)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setIncidentsByYear(data as incidentsPerYear[])
        console.log(incidentsByYear)
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getIncidentsByYear()
  }, []);

  
  const labels = incidentsByYear.map((x) => x.year)
  const data = incidentsByYear.map((x) => parseInt(x.incidents))

  return (
    <div>
      <h3>Number of Incidents by Year</h3>
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
    </div>
  )
}

export default IncidentsByYear

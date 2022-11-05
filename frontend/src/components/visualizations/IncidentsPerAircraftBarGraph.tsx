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
import { INCIDENTS_PER_AIRCRAFT_API } from "../../constants"

interface incidentsPerAircraft {
  index: number,
  AC_MASS: string,
  NR_INJURIES: number
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function IncidentsPerAircraftBarGraph () {
  const [incidentsPerAircraft, setIncidentsPerAircraft] = useState<
  incidentsPerAircraft[]
  >([])

  const getIncidentsPerAircraft = () => {
    fetch(INCIDENTS_PER_AIRCRAFT_API)
      .then(async (response) => {
        return await response.json()
      })
      .then((data) => {
        setIncidentsPerAircraft(data as incidentsPerAircraft[])
      })
      .catch(err => console.log("Error fetching: ", err))
  }

  useEffect(() => {
    getIncidentsPerAircraft()
  }, []);

  
  const labels = incidentsPerAircraft.map((x) => x.AC_MASS)
  const data = incidentsPerAircraft.map((x) => x.NR_INJURIES)

  return (
    <div>
      <h3>Number of Incidents by Aircraft model</h3>
      <Bar
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
      />
    </div>
  )
}

export default IncidentsPerAircraftBarGraph

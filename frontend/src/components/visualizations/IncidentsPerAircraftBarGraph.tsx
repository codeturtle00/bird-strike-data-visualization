import { useState } from "react"
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
  aircraft_mass: string,
  num_injuries: number
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
  }

  getIncidentsPerAircraft()
  const labels = incidentsPerAircraft.map((x) => x.aircraft_mass)
  const data = incidentsPerAircraft.map((x) => x.num_injuries)
  console.log(labels)

  return (
    <div>
      <h1>Number of Incidents by Aircraft model</h1>
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

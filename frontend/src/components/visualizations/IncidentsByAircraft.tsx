import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"
import { Pie } from "react-chartjs-2"
import { INCIDENTS_PER_AIRCRAFT_API } from "../../constants"


ChartJS.register(ArcElement, Tooltip, Legend)

interface incidentsPerAircraft {
  index: number,
  AC_MASS: string,
  NR_INJURIES: number
}

function IncidentsByAircraft () {
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
      <h3>Number of Incidents by Aircraft Mass</h3>
      <Pie
        options={{
          aspectRatio: 2
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Number of Incidents",
              data,
              borderColor: 'white',
              backgroundColor: [
                "#003f5c",
                "#58508d",
                "#bc5090",
                "#ff6361",
                "#ffa600",
              ]
            }
          ]
        }}
      />
    </div>
  )
}

export default IncidentsByAircraft

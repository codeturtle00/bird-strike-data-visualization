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
import { INCIDENTS_BY_BIRD_SPECIES_API } from "../../constants"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface incidentsPerSpecies {
    species: string,
    incidents: string
}

function IncidentsBySpecies () {
  const [incidentsBySpecies, setIncidentsBySpecies] = useState<incidentsPerSpecies[]>([])

  useEffect(() => {
    const getIncidentsBySpecies = () => {
      fetch(INCIDENTS_BY_BIRD_SPECIES_API)
        .then(async (response) => {
          return await response.json()
        })
        .then((data) => {
          data.sort((a: incidentsPerSpecies, b: incidentsPerSpecies) => parseInt(b.incidents) - parseInt(a.incidents))
          setIncidentsBySpecies(data as incidentsPerSpecies[])
        })
        .catch(err => console.log("Error fetching: ", err))
    }

    getIncidentsBySpecies()
  }, []);
  
  const labels = incidentsBySpecies.map((x) => x.species)
  const data = incidentsBySpecies.map((x) => parseInt(x.incidents))

  return (
    <div>
      <h3>Number of Incidents by Bird Species</h3>
      <Bar
        options={{
            indexAxis: 'y' as const,
            animation: false
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
        
        height={8000}
      />
    </div>
  )
}

export default IncidentsBySpecies

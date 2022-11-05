import "./App.css"
import Map from "./components/visualizations/Map"
import IncidentsPerAircraftBarGraph from "./components/visualizations/IncidentsPerAircraftBarGraph"
import Summary from "./components/Summary"

function App () {
  return (
    <>
      <Summary />
      <IncidentsPerAircraftBarGraph />
      <Map />
    </>
  )
}

export default App

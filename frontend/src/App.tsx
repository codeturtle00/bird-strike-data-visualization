import "./App.css"
import Map from "./components/visualizations/Map"
import IncidentsPerAircraftBarGraph from "./components/visualizations/IncidentsPerAircraftBarGraph"
import Summary from "./components/Summary"

function App () {
  return (
    <div className="main">
      
    <h1> Bird Strikes </h1>
      <Summary />
      <div className="pageSection">
        <Map />
      </div>
      <IncidentsPerAircraftBarGraph />
    </div>
  )
}

export default App

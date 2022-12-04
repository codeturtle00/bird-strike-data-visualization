import "./App.css"
import Map from "./components/visualizations/Map"
import IncidentsByAircraft from "./components/visualizations/IncidentsByAircraft"
import Summary from "./components/Summary"
import IncidentsByYear from "./components/visualizations/IncidentsByYear"

function App () {
  return (
    <div className="main">
      
    <h1> Bird Strikes </h1>
      <Summary />
      <div className="pageSection">
        <Map />
      </div>
      <IncidentsByAircraft />
      <IncidentsByYear />
    </div>
  )
}

export default App

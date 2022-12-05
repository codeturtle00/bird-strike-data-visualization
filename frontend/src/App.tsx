import "./App.css"
import Map from "./components/visualizations/Map"
import IncidentsByAircraft from "./components/visualizations/IncidentsByAircraft"
import Summary from "./components/Summary"
import IncidentsByYear from "./components/visualizations/IncidentsByYear"
import IncidentsByMonth from "./components/visualizations/IncidentsByMonth"
import IncidentsByFlightPhase from "./components/visualizations/IncidentsByFlightPhase"
import IncidentsByAirline from "./components/visualizations/IncidentsByAirline"

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
      <IncidentsByMonth />
      <IncidentsByFlightPhase />
      <IncidentsByAirline />
    </div>
  )
}

export default App

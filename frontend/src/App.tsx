import "./App.css"
import Map from "./components/visualizations/Map"
import IncidentsByAircraft from "./components/visualizations/IncidentsByAircraft"
import Summary from "./components/Summary"
import IncidentsByYear from "./components/visualizations/IncidentsByYear"
import IncidentsByMonth from "./components/visualizations/IncidentsByMonth"
import IncidentsByFlightPhase from "./components/visualizations/IncidentsByFlightPhase"
import IncidentsByAirline from "./components/visualizations/IncidentsByAirline"
import IncidentsBySpecies from "./components/visualizations/IncidentsBySpecies"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App () {
  return (
    <div className="main">
      
    <h1> Bird Strikes </h1>
      <Summary />
      <div className="pageSection">
        <Map />
      </div>
      <Tabs>
        <TabList>
          <Tab>Aircraft Size</Tab>
          <Tab>Year</Tab>
          <Tab>Month</Tab>
          <Tab>Flight Phase</Tab>
          <Tab>Airline</Tab>
          <Tab>Bird Species</Tab>
        </TabList>

        <TabPanel>
          <IncidentsByAircraft />
        </TabPanel>
        <TabPanel>
          <IncidentsByYear />
        </TabPanel>
        <TabPanel>
          <IncidentsByMonth />
        </TabPanel>
        <TabPanel>
          <IncidentsByFlightPhase />
        </TabPanel>
        <TabPanel>
          <IncidentsByAirline />
        </TabPanel>
        <TabPanel>
            <IncidentsBySpecies />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App

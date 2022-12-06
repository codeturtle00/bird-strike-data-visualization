import IncidentsByAircraft from "./visualizations/IncidentsByAircraft"
import IncidentsByYear from "./visualizations/IncidentsByYear"
import IncidentsByMonth from "./visualizations/IncidentsByMonth"
import IncidentsByFlightPhase from "./visualizations/IncidentsByFlightPhase"
import IncidentsByAirline from "./visualizations/IncidentsByAirline"
import IncidentsBySpecies from "./visualizations/IncidentsBySpecies"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface Props {
  show: boolean
}

const Graphs: React.FC<Props> = ({show}) => {
  return show ? (
    <div className="extraMenu"> 
      <h1>View Incidents by...</h1>
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
  : <></>
}

export default Graphs

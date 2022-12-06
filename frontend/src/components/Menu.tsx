import Summary from "./Summary"
import Graphs from "./Graphs"
import { useEffect, useState } from "react"

interface Props {
  show: boolean,
  hideFunc: () => void
}

const Menu: React.FC<Props> = ({show, hideFunc}) => {
  const [showGraphs, setShowGraphs] = useState(false)
  
  useEffect(() => {
    if (!show) {
      setShowGraphs(false)
    }
    console.log("show: ", show)
  }, [show])

  return show ? (
    <div className="menuBackground">
      <div className="menusSection"> 
        <div className="menu">
          <h1>Aircraft Bird Strikes Data Visualization</h1>
          <Summary />
          <div style={{height: 20}}></div>
          <button className="menuButton" onClick={()=>setShowGraphs(!showGraphs)}>{">"} View Graphs of Incidents vs Variable</button>
          <button className="menuButton" onClick={hideFunc}>{">"} View Map of Incidents by Year</button>
          <p>Data provided publicly by <a href="https://wildlife.faa.gov/home">wildlife.faa.gov</a>. Website updated on: Nov 1 2022</p>

        </div>
        
        <Graphs show={showGraphs} />
        
      </div>
      
    </div>
  )
  : <></>
}

export default Menu
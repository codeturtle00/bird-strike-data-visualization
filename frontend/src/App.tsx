import "./App.css"
import Map from "./components/visualizations/Map"
import {
  Chart as ChartJS
} from "chart.js"
import { useState } from "react"
import Menu from "./components/Menu";

ChartJS.defaults.color  = "#fff";

function App () {


  const [showMenu, setShowMenu] = useState(true)
  const [hoveringButton, setHoveringButton] = useState(false)

  return (
    <div>
      {showMenu || <button 
        onClick={() => setShowMenu(!showMenu)}
        className="toggleMenuButton"
        onMouseEnter={() => setHoveringButton(true)}
        onMouseLeave={() => setHoveringButton(false)}
        style={{paddingLeft: hoveringButton ? "20px" : "0px"}}
      >{">"}</button>}
      <Menu show={showMenu} hideFunc={()=>setShowMenu(false)}/>
      <Map />
      
    </div>
  )
}

export default App

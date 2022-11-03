import React, { useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"



export default function Map() {

  const [currYear, setCurrYear] = useState(2012)

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  const minYear = 1990 // TODO: query for this
  const maxYear = 2022 // TODO: query for this

  return (
    <div>
    <ComposableMap>
      <Geographies geography="/map.json">
        {({ geographies }: any) =>
          geographies.map((geo: { rsmKey: React.Key | null | undefined }) => (
            <Geography key={geo.rsmKey} geography={geo} 
            style={{
              default: {
                fill: "#D6D6DA",
                outline: "none"
              },
              hover: {
                fill: "#F53",
                outline: "none"
              },
              pressed: {
                fill: "#E42",
                outline: "none"
              }
            }}/>
          ))
        }
      </Geographies>
    </ComposableMap>
    Year: {currYear}
    <input type="range" 
            min={minYear} max={maxYear} 
            value={currYear} 
            onChange={(e) => setCurrYear(e.target.valueAsNumber)}
            className="slider" 
            id="myRange"></input>
    </div>
  )
}
import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function Map() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }: any) =>
          geographies.map((geo: { rsmKey: React.Key | null | undefined }) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
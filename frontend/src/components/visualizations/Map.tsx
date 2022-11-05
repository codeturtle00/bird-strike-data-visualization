import React, { useEffect, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps"
import { DATAPOINTS_BY_YEAR_API } from "../../constants"

const DEFAULT_MIN_YEAR = 999999
const DEFAULT_MAX_YEAR = 0

interface apiResponseEntry {
  INCIDENT_YEAR: string,
  LATITUDE: number,
  LONGITUDE: number,
  AIRPORT: string,
  NUM_INCIDENTS: string,
}

interface markersByYear {[year: number]: marker[]}

type marker = {
  label: string,
  coordinates: [number, number]
  num_incidents: number,
}

interface positionState {
  coordinates: [number, number],
  zoom: number
}

export default function Map () {
  const [currYear, setCurrYear] = useState(2012)
  const [markersByYear, setMarkersByYear] = useState<markersByYear>({})
  const [position, setPosition] = useState<positionState>({ coordinates: [0, 0], zoom: 1 });
  const [minYear, setMinYear] = useState(DEFAULT_MIN_YEAR)
  const [maxYear, setMaxYear] = useState(DEFAULT_MAX_YEAR)

  useEffect(() => {
    let minYear = DEFAULT_MIN_YEAR
    let maxYear = DEFAULT_MAX_YEAR

    const getDatapoints = () => {
      fetch(DATAPOINTS_BY_YEAR_API)
        .then(async (response) => {
          return await response.json()
        })
        .then((data) => {
          let formattedData: markersByYear = {}
          data.foreach((entry: apiResponseEntry) => {
            const marker: marker = {
              label: entry.AIRPORT,
              coordinates: [entry.LONGITUDE, entry.LATITUDE],
              num_incidents: parseInt(entry.NUM_INCIDENTS)
            } 
            formattedData[parseInt(entry.INCIDENT_YEAR)] = formattedData[parseInt(entry.INCIDENT_YEAR)] || []
            formattedData[parseInt(entry.INCIDENT_YEAR)].push(marker)
            setMinYear(Math.min(minYear, parseInt(entry.INCIDENT_YEAR)))
            setMaxYear(Math.max(maxYear, parseInt(entry.INCIDENT_YEAR)))
          })
          setMarkersByYear(formattedData)
        })
        .catch(err => console.log("Error fetching: ", err))
    }

    getDatapoints()
  }, []);

  function handleMoveEnd(position: any) {
    setPosition(position);
  }

  return (
    <div>
      <h3>Map of Incidents by Year</h3>
      <ComposableMap>
        <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
        <Geographies geography="/map.json">
          {({ geographies }: any) =>
            geographies.map((geo: { rsmKey: React.Key | null | undefined }) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
        {(markersByYear[currYear] || []).map(({ label, coordinates }) => (
          <Marker key={label} coordinates={coordinates as [number, number]}>
            <circle r={1} fill="#F00" />
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>
      Year: {currYear}
      <input
        type="range"
        min={minYear===DEFAULT_MIN_YEAR ? 1990 : minYear}
        max={maxYear===DEFAULT_MAX_YEAR ? 2022 : maxYear}
        value={currYear}
        onChange={(e) => setCurrYear(e.target.valueAsNumber)}
        className="slider"
        id="myRange"
      ></input>
    </div>
  )
}

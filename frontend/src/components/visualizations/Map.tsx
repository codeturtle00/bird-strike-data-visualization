import React, { useEffect, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps"
import { DATAPOINTS_BY_YEAR_API } from "../../constants"
import ReactTooltip from 'react-tooltip'

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
  const [currYear, setCurrYear] = useState(0)
  const [markersByYear, setMarkersByYear] = useState<markersByYear>({})
  const [position, setPosition] = useState<positionState>({ coordinates: [-90, 30], zoom: 3 });
  const [zoomScaleFactor, setZoomScaleFactor] = useState(position.zoom)
  const [minYear, setMinYear] = useState(DEFAULT_MIN_YEAR)
  const [maxYear, setMaxYear] = useState(DEFAULT_MAX_YEAR)
  const [maxIncidents, setMaxIncidents] = useState(0)
  const [tooltip, setTooltip] = useState("");


  useEffect(() => {

    const getDatapoints = () => {
      fetch(DATAPOINTS_BY_YEAR_API)
        .then(async (response) => {
          return await response.json()
        })
        .then((data) => {
          let formattedData: markersByYear = {}
          let minYearInData = DEFAULT_MIN_YEAR
          let maxYearInData = DEFAULT_MAX_YEAR
          let maxIncidentsInData = 0
          data.forEach((entry: apiResponseEntry) => {
            const marker: marker = {
              label: entry.AIRPORT,
              coordinates: [entry.LONGITUDE, entry.LATITUDE],
              num_incidents: parseInt(entry.NUM_INCIDENTS)
            }
            formattedData[parseInt(entry.INCIDENT_YEAR)] = formattedData[parseInt(entry.INCIDENT_YEAR)] || []
            formattedData[parseInt(entry.INCIDENT_YEAR)].push(marker)
            minYearInData = Math.min(minYearInData, parseInt(entry.INCIDENT_YEAR))
            maxYearInData = Math.max(maxYearInData, parseInt(entry.INCIDENT_YEAR))
            maxIncidentsInData = Math.max(maxIncidentsInData, parseInt(entry.NUM_INCIDENTS))
          })
          setMarkersByYear(formattedData)
          setMinYear(minYearInData)
          setMaxYear(maxYearInData)
          setCurrYear(maxYearInData)
          setMaxIncidents(maxIncidentsInData)
        })
        .catch(err => console.log("Error fetching: ", err))
    }

    getDatapoints()
  }, []);

  function handleMoveEnd(position: any) {
    setPosition(position);
  }

  function getColor(numIncidents: number) {
    const percent = numIncidents / maxIncidents
    // Our gradient will be 300 colors, first R 105 -> 255, then G 255 -> 0 
    const gradient = percent * 300
    const red = Math.min(105 + gradient, 255)
    const green = 255 - Math.max(0, gradient - 150)
    return `rgb(${red}, ${green}, 0)`
  }

  return (
    <div>
      <h3>Map of Incidents by Year</h3>
      Showing Year: <b>{currYear}</b>
      <input
        type="range"
        min={minYear===DEFAULT_MIN_YEAR ? 1990 : minYear}
        max={maxYear===DEFAULT_MAX_YEAR ? 2022 : maxYear}
        value={currYear}
        onChange={(e) => setCurrYear(e.target.valueAsNumber)}
        className="slider"
        id="myRange"
      ></input>
      <ComposableMap className="map" data-tip="">
        <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            onMove={k => setZoomScaleFactor(k.zoom)}
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
                  },
                  hover: {
                    fill: "#D6D6DA",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#D6D6DA",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
        {(markersByYear[currYear] || []).map(({ label, coordinates, num_incidents }) => (
          <Marker key={label} coordinates={coordinates as [number, number]}
          onMouseEnter={() => {
            setTooltip(
              `<p>Airport: ${label}</p>
              <p>Incidents: ${num_incidents}</p>`);
          }}
          onMouseLeave={() => {
            setTooltip("");
          }}>
            <circle
            r={2/Math.max(zoomScaleFactor/2, 1)} 
            fill={getColor(num_incidents)} 
            stroke='blue'
            strokeWidth='0.1'
            />
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip html={true}>{tooltip}</ReactTooltip>
    </div>
  )
}

// function circleMarker({size, incidentNum, gradientFunc, airport}) => {
//   return (
//     <circle 
//             data-tip="hello world\n test \n"
//             r={2/Math.max(zoomScaleFactor/2, 1)} 
//             fill={getColor(num_incidents)} 
//             stroke='#FF62E1'
//             strokeWidth='0.05'
//             />
//   )
// } 
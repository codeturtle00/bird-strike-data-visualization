const LOCAL = false
export const BACKEND_URL = LOCAL ? "http://localhost:3001" : "http://3.16.78.249:3001/";
export const INCIDENTS_PER_AIRCRAFT_API =
  BACKEND_URL + "/incidents-per-aircraft";
export const DATAPOINTS_BY_YEAR_API = BACKEND_URL + "/datapoints-by-year/";
export const FATALITY_RATE = BACKEND_URL + "/fatality-rate";
export const TOTAL_INCIDENTS = BACKEND_URL + "/total-incidents";

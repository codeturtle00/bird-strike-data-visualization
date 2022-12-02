const pg = require("pg");

let pool = new pg.Pool({
  connectionString: process.env.DB_URL,
});

const getIncidentsPerAircraft = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM injuries_by_aircraft;", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results?.rows);
    });
  });
};

const getDatapointsByYear = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM strikes_map", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results?.rows);
    });
  });
};

const getFatalityRate = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `SELECT SUM("NR_FATALITIES") / count(*) as fatality_rate FROM bird_strikes_original`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getTotalIncidents = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT COUNT(*) FROM bird_strikes_original",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getIncidentsByYear = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM incidents_by_year",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getIncidentsByMonth = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM incidents_by_month",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getIncidentsByFlightPath = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM incidents_by_phase",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getIncidentsByAirline = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM incidents_by_airline",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

const getIncidentsByBirdSpecies = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM incidents_by_species",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results?.rows);
      }
    );
  });
};

module.exports = {
  getIncidentsByMonth,
  getIncidentsByYear,
  getIncidentsByFlightPath,
  getIncidentsByAirline,
  getIncidentsByBirdSpecies,
  getTotalIncidents,
  getFatalityRate,
  getDatapointsByYear,
  getIncidentsPerAircraft,
  pool,
};

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

module.exports = {
  getTotalIncidents,
  getFatalityRate,
  getDatapointsByYear,
  getIncidentsPerAircraft,
  pool,
};

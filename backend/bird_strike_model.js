const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

const get_bird_strikes = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM bird_strike", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results?.rows);
    });
  });
};

const get_state_freqs = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT origin_state, COUNT(*) as data FROM bird_strike GROUP BY origin_state",
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
  get_bird_strikes,
  get_state_freqs,
};

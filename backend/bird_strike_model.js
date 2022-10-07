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

module.exports = {
  get_bird_strikes,
};

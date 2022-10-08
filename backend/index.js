const express = require("express");
const app = express();
const port = 3001;

const bird_strike_model = require("./bird_strike_model");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  bird_strike_model
    .get_bird_strikes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/state-freqs", (req, res) => {
  bird_strike_model
    .get_state_freqs()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

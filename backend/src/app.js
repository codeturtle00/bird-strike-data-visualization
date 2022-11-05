const express = require("express");
const app = express();

const bird_strike_model = require("./bird_strike_model");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/incidents-per-aircraft", (req, res) => {
  bird_strike_model
    .getIncidentsPerAircraft()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/datapoints-by-year/", (req, res) => {
  bird_strike_model
    .getDatapointsByYear()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/fatality-rate", (req, res) => {
  bird_strike_model
    .getFatalityRate()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/total-incidents", (req, res) => {
  bird_strike_model
    .getTotalIncidents()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

module.exports = app;
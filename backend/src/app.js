require("dotenv").config();
const express = require("express");
const winston = require('winston');
const expressWinston = require('express-winston')

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

app.use(expressWinston.logger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    // process.env.NODE_ENV !== 'production' ? new  winston.transports.Console({ format: winston.format.simple() }) : null
  ],
}))

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
      logger.error(error)
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
      logger.error(error)
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
      logger.error(error)
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
      logger.error(error)
      res.status(500).send(error);
    });
});

app.get("/incidents-by-month", (req, res) => {
  bird_strike_model
    .getIncidentsByMonth()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.error(error)
      res.status(500).send(error);
    });
});

app.get("/incidents-by-year", (req, res) => {
  bird_strike_model
    .getIncidentsByYear()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.error(error)
      res.status(500).send(error);
    });
});

app.get("/incidents-by-flight-path", (req, res) => {
  bird_strike_model
    .getIncidentsByFlightPath()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.error(error)
      res.status(500).send(error);
    });
});

app.get("/incidents-by-airline", (req, res) => {
  bird_strike_model
    .getIncidentsByAirline()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.error(error)
      res.status(500).send(error);
    });
});

app.get("/incidents-by-bird-species", (req, res) => {
  bird_strike_model
    .getIncidentsByBirdSpecies()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.error(error)
      res.status(500).send(error);
    });
});

module.exports = app;

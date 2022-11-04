const request = require("supertest");
const app = require("../src/app");
const model = require("../src/bird_strike_model");

describe("Test endpoints", () => {
  afterAll((done) => {
    model.pool.end();
    done();
  });

  test("GET /incidents-per-aircraft has code 200 and returns data", () => {
    return request(app)
      .get("/incidents-per-aircraft")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
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

  test("GET /fatality-rate has code 200 and returns data", () => {
    return request(app)
      .get("/fatality-rate")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
      });
  });

  test("GET /total-incidents has code 200 and returns data", () => {
    return request(app)
      .get("/total-incidents")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
      });
  });
});

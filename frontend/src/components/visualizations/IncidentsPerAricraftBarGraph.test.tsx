import { render, screen } from "@testing-library/react";
import IncidentsPerAircraftBarGraph from "./IncidentsPerAircraftBarGraph";

test("renders bar graph title", () => {
  render(<IncidentsPerAircraftBarGraph />);
  const text = screen.getByText("Number of Incidents by Aircraft model");
  expect(text).toBeInTheDocument();
});

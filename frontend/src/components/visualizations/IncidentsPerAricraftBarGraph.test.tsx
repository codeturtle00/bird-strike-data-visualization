import { render, screen } from "@testing-library/react";
import IncidentsPerAircraftBarGraph from "./IncidentsPerAircraftBarGraph";

test("renders learn react link", () => {
  render(<IncidentsPerAircraftBarGraph />);
  const linkElement = screen.getByText("Bird Strikes Visualization");
  expect(linkElement).toBeInTheDocument();
});

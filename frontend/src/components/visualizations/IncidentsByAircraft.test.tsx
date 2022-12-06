import { render, screen } from "@testing-library/react";
import IncidentsByAircraft from "./IncidentsByAircraft";

test("renders bar graph title", () => {
  render(<IncidentsByAircraft />);
  const text = screen.getByText("Number of Incidents by Aircraft Mass");
  expect(text).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Map from "./Map";

test("renders map title", () => {
  render(<Map />);
  const title = screen.getByText("Map of Incidents by Year");
  expect(title).toBeInTheDocument();
});

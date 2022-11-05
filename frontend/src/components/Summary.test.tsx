import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

test("renders learn react link", () => {
  render(<Summary />);
  const linkElement = screen.getByText("Bird Strikes Visualization");
  expect(linkElement).toBeInTheDocument();
});

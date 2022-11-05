import { render, screen } from "@testing-library/react";
import {SummaryCard} from "./Summary";

test("renders basic summary card texts", () => {
  render(<SummaryCard totalNumIncidents={"1234"} fatalityRate={0.0123}/>);
  const text1 = screen.getByText("Total number of report incidents: 1234");
  const text2 = screen.getByText("Fatality Rate: 0.0123");
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

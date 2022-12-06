import { render, screen } from "@testing-library/react";
import {SummaryCard} from "./Summary";

test("renders basic summary card texts", () => {
  render(<SummaryCard totalNumIncidents={"1234"} fatalityRate={0.0123}/>);
  const text1 = screen.getByText("1234");
  const text2 = screen.getByText("1.23%");
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

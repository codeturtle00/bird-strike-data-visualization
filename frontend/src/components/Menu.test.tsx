import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./Menu";

test("menu closes properly", () => {
  let hideFunc = 0
  render(<Menu show={true} hideFunc={()=>hideFunc+=1}/>);
  const text = screen.getByText("Aircraft Bird Strikes Data Visualization");
  expect(text).toBeInTheDocument();
  const btn1 = screen.getByTestId("view-graphs-btn");
  const btn2 = screen.getByTestId("view-map-btn");
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();

  fireEvent.click(btn2)
  expect(hideFunc).toBe(1)
});

test("menu opens graphs properly", () => {
  let hideFunc = 0
  render(<Menu show={true} hideFunc={()=>hideFunc+=1}/>);
  const text = screen.getByText("Aircraft Bird Strikes Data Visualization");
  expect(text).toBeInTheDocument();
  const btn1 = screen.getByTestId("view-graphs-btn");
  const btn2 = screen.getByTestId("view-map-btn");
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();

  fireEvent.click(btn1)
  const graphMenu = screen.getByText("View Incidents by...");
  expect(graphMenu).toBeInTheDocument();
});
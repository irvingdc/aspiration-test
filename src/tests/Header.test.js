import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

it("renders the header correctly", async () => {
  render(<Header topic="React" />);
  const headerElement = screen.getByText("Related topics to React");
  expect(headerElement).toBeTruthy();
});

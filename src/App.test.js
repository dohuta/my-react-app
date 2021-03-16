import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders new text", () => {
  render(<App />);
  const dockerText = screen.getByText(/docker/i);
  expect(dockerText).toBeInTheDocument();
});

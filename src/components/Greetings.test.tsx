import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("renders greeting with name", () => {
  render(<Greetings name="Liz" />);
  expect(screen.getByText("Hello, Liz!")).toBeInTheDocument();
});

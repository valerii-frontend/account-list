import React from "react";
import { render, screen } from "@testing-library/react";
import MainTitle from "../MainTitle";

describe("MainTitle", () => {
  test("Render loading text", () => {
    render(<MainTitle loading={true} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  test("Render normal title", () => {
    render(<MainTitle loading={false} />);

    expect(screen.getByText("Accounts list")).toBeInTheDocument();
  });
});

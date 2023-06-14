import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import UsersTable from "../UsersTable";

const mockAccounts = [
  { _id: 1, name: "User 1", profitLoss: 100, accountType: 1 },
  { _id: 2, name: "User 2", profitLoss: 200, accountType: 2 },
];

const mockAccountTypes = [
  { id: 1, title: "Account Type 1" },
  { id: 2, title: "Account Type 2" },
];

describe("UsersTable", () => {
  test("Render table header", () => {
    render(<UsersTable accounts={mockAccounts} accountTypes={mockAccountTypes} />);

    const name = screen.getByText("Name ▲");
    const profit = screen.getByText("Profit & Loss");
    const type = screen.getByText("Account Type");

    expect(name).toBeInTheDocument();
    expect(profit).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });
  test("Renders accounts with correct types", () => {
    render(<UsersTable accounts={mockAccounts} accountTypes={mockAccountTypes} />);

    const user1 = screen.getByText("User 1");
    const user2 = screen.getByText("User 2");
    const type1 = screen.getByText("Account Type 1");
    const type2 = screen.getByText("Account Type 2");

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
  });
  test("Empty state", () => {
    render(<UsersTable accounts={[]} accountTypes={[]} />);

    const empty = screen.getByText("The list of accounts is empty.");

    expect(empty).toBeInTheDocument();
  });
});

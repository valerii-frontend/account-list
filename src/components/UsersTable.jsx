import React, { useEffect, useState } from "react";
import compareValues from "../utils/compare";

export default function UsersTable({ accounts, accountTypes }) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const handleSort = (column) => () => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedAccounts = [...accounts].sort((a, b) => {
    switch (sortColumn) {
      case "name":
        return compareValues(a.name, b.name, sortDirection);
      case "profitLoss":
        return compareValues(a.profitLoss, b.profitLoss, sortDirection);
      case "accountType":
        const type1 = accountTypes.find((type) => type.id === a.accountType)?.title;
        const type2 = accountTypes.find((type) => type.id === b.accountType)?.title;
        return compareValues(type1, type2, sortDirection);
      default:
        return 0;
    }
  });

  useEffect(() => {
    handleSort("name")();
  }, []);

  const headStyles = "py-2 px-4 border-b cursor-pointer hover:bg-blue-200";
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border border-gray-200 min-w-[750px]'>
        <thead className='bg-blue-100'>
          <tr>
            <th className={headStyles} onClick={handleSort("name")}>
              Name {sortColumn === "name" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
            <th className={headStyles} onClick={handleSort("profitLoss")}>
              Profit &amp; Loss {sortColumn === "profitLoss" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
            <th className={headStyles} onClick={handleSort("accountType")}>
              Account Type {sortColumn === "accountType" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAccounts.map((account, index) => (
            <tr key={account._id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-300`}>
              <td className='py-2 px-4 border-b'>{account.name}</td>
              <td className='py-2 px-4 border-b'>${account.profitLoss}</td>
              <td className='py-2 px-4 border-b'>
                {accountTypes.find((type) => type.id === account.accountType)?.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

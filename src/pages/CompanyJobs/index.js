import React, { useState } from "react";
import Table from "../../component-ui/Table";
import { getUsers } from "../../use-cases/get-users";
import EditUser from "../../component-ui/EditUser";
import { changeUserStatus } from "../../use-cases/change-user-status";

const columns = [
  {
    accessorKey: "MC",
    header: "MC Id",
    size : "10"
  },
  {
    accessorKey: "date",
    header: "Date",
    size : "10"
  },
  {
    accessorKey: "company",
    header: "Company",
    size : "10"
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    size : "10"
  },
  {
    accessorKey: "advance",
    header: "Advance",
    size : "10"
  },
  {
    accessorKey: "advanceStatus",
    header: "Advance Status",
    size : "5"
  },
  {
    accessorKey: "invoiceImage",
    header: "Invoice Image",
    size : "10"
  },
];
const CompanyJobs = () => {
    const [editingUser, setEditingUser] = useState(null);
    const [tableRefreshFlag, setTableRefreshFlag] = useState(false);
  
    const setEditingRow = (row) => {
      setEditingUser(row);
    };
  
    const handleStatus = async (id) => {
      await changeUserStatus(id);
      setTableRefreshFlag((prev) => !prev);
    };
  return (
    <div>
    <Table
    fetchDataList={getUsers}
    headers={columns}
    rowIdField={"id"}
    setEditingRow={setEditingRow}
    handleStatus={handleStatus}
    tableRefreshFlag={tableRefreshFlag}/>
    <EditUser
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        setTableRefreshFlag={setTableRefreshFlag}/>
  </div>
  )
}

export default CompanyJobs;
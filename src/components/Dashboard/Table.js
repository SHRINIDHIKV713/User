
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ employees, handleEdit, handleDelete, setIsAdding }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });
  
    const [rowCount, setRowCount] = useState(2); // initially show 2 rows
  
    // function to handle "Load More" button click
    const handleLoadMoreClick = () => {
      setRowCount(rowCount + 3); // increase row count by 3
    };
    
  // slice the data based on the row count state
  const slicedData = employees.slice(0, rowCount);

  return (
    <div className="contain-table">
      <h3>User Details</h3>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add User</button>
      </div>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>

            <th>Email</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
        
          {employees.length > 0 ? (
            slicedData.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>

                <td>{employee.email}</td>

                <td className="text-center">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                    style={{ border: "none" }}
                  >
                    <EditIcon style={{color:"#000"}}/>
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                    style={{ border: "none" }}
                  >
                    <DeleteIcon style={{color:"#E00F23"}} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
      {rowCount < employees.length && (
        <button 
        onClick={handleLoadMoreClick}>Load More</button>
      )}
      
    </div>
  );
};

export default Table;

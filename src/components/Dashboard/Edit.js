import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);

  const [email, setEmail] = useState(selectedEmployee.email);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !email) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      email,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName}'s details have been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container" style={{ padding: "2%", marginTop: "3%" }}>
      <form onSubmit={handleUpdate}>
        <h3>Edit User</h3>
        <label htmlFor="firstName">Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;

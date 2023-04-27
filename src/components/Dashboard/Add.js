import React, { useState } from "react";
import Swal from "sweetalert2";

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const handleClearClick = () => {
    setFirstName("");
    setEmail("");
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !email) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      email,
    };

    employees.push(newEmployee);
    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName}'s details have been saved.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container" style={{ padding: "2%", marginTop: "3%" }}>
      <form onSubmit={handleAdd}>
        <h3>Enter User Details</h3>
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
          <input type="submit" value="Submit" />
          <input
            style={{ marginLeft: "12px" }}
            type="button"
            value="Clear"
            onClick={handleClearClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;

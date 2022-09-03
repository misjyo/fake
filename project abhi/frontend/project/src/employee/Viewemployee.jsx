import React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

export const Viewemployee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let [data, setData] = useState([]);

  let [id, setId] = useState("");

  let [emp_id, setEmp_id] = useState("");
  let [emp_name, setEmp_name] = useState("");
  let [designation, setDesignation] = useState("");
  let [doj, setDoj] = useState("");
  let [email, setEmail] = useState("");

  useEffect(() => {
    displayEmployee();
  }, []);

  async function displayEmployee() {
    let response = await fetch("http://localhost:4000/getemp");
    let udata = await response.json();
    setData(udata.response);
  }

  function deleteData(emp_id) {
    fetch(`http://localhost:4000/deleteemp${emp_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  function updateEmployee(id, emp_id, emp_name, designation, doj, email) {
    setId(id);
    setEmp_id(emp_id);
    setEmp_name(emp_name);
    setDesignation(designation);
    setDoj(doj);
    setEmail(email);

    setShow(true);
  }

  function putEmployee() {
    let userdata = { id, emp_id, emp_name, designation, doj, email };
    fetch(`http://localhost:4000/putemp${emp_id}`, {
      method: "PUT",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: " Employee ID",
      selector: (row) => row.emp_id,
      sortable: true,
    },
    {
      name: " Employee name",
      selector: (row) => row.emp_name,
      sortable: true,
    },
    {
      name: " Employee designation",
      selector: (row) => row.designation,
      sortable: true,
    },
    {
      name: "Date of joining",
      selector: (row) => row.designation,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteData(row.emp_id)}
        > Delete</button>
      ),
    },
    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() =>
            updateEmployee(
              row.id,
              row.emp_id,
              row.emp_name,
              row.designation,
              row.doj,
              row.email
            )
          }
        >Update</button>
      ),
    },
  ];

  return(
 

  <div className="container">
    <button
      className="btn btn-light"
      style={{ marginLeft: "950px", marginTop: "30px" }}
    >
      <Link
        to="/addemp"
        style={{
          textDecoration: "none",
          color: "green",
          fontWeight: "bolder",
          marginTop: "15px",
        }}
      >
        Add Employee
      </Link>
    </button>
    <DataTable
      title="Employee list"
      columns={columns}
      data={data}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      selectableRows
      selectedRowsHighlight
      highlightOnHover
      subHeader
      
      
    />
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="id"
              placeholder="Enter user id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control
              type="id"
              placeholder="Enter employee id"
              value={emp_id}
              onChange={(e) => setEmp_id(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={emp_name}
              onChange={(e) => setEmp_name(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Employee Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of joining</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            putEmployee();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
};

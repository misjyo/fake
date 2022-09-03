import React from "react";
import { Form, Button} from "react-bootstrap";
import { useState } from "react";

export const Addemployee = () => {
  let [id, setId] = useState("");

  let [emp_id, setEmp_id] = useState("");
  let [emp_name, setEmp_name] = useState("");
  let [designation, setDesignation] = useState("");
  let [doj, setDoj] = useState("");
  let [email, setEmail] = useState("");

  const postData = () => {
    let userdata = { id, emp_id, emp_name, designation, doj, email };

    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:4000/postemp", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Form onSubmit={postData()} className="container p-5 border mt-4">
  
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
       
      </Form>
    </div>
  );
};

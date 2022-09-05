import React, { useEffect, useState } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate =useNavigate();

  useEffect(()=>{
    if (localStorage.getItem('user-info')) {
      // navigate("/viewemp")
    }
    login()
  },[])

  async function login()
  {
    console.warn(email,password)
    let item={email,password}
    let result = await fetch("http://localhost:4000/admin/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(item)
    });
    result =await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    // navigate("/viewemp")
  }


  return (
    <div>
      <Row>
      <Col xs={4}>
         <Form className="container p-3 border mt-4" style={{marginLeft:"500px"}}>
          <h3> Lgin Form</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={login} variant="light" type="submit"><Link to="/viewemp">
            Login</Link>
          </Button>
        </Form></Col>
       
      </Row>
    </div>
  );
};

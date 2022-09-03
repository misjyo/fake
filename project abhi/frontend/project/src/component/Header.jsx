import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
export const Header = () => {
  return (
    <div  >
     
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Admin</Navbar.Brand>
          <NavLink to ="/addemp"> Addemp</NavLink>
          <NavLink to ="/viewemp"> Viewemp</NavLink>


          <Button variant="outline-primary" >
            <Link to="/login">Login</Link>
          </Button>

          <Button variant="outline-primary">
            <Link to="/register">Registration </Link>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

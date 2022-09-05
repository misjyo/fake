import React from "react";

import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
export const Header = () => {
  return (
    <div  >
     
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand > <Link to ="/">Admin</Link></Navbar.Brand>
          {/* <NavLink to ="/addemp"> Addemp</NavLink>
          <NavLink to ="/viewemp"> Viewemp</NavLink> */}


          <Button variant="light" style={{marginLeft:"1200px"}}>
            <Link to="/login">Login</Link>
          </Button>

          <Button variant="light"  style={{marginRight:"50px"}}>
            <Link to="/register">Registration </Link>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

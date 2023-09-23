import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { context } from "../context/Provider";
import { useContext } from "react";

function BasicExample() {
  const ctx = useContext(context);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SANKHYA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!ctx.authenticated && <Nav.Link href="/auth">Log In</Nav.Link>}
            {ctx.authenticated && <Nav.Link>Log Out</Nav.Link>}
            {ctx.authenticated && (
              <p style={{ paddingTop: "8px", paddingLeft: "15px" }}>
                welcome {ctx.user}
              </p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

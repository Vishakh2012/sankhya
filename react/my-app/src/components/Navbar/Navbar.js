
import'./navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{fontFamily:'Montserrat, sans-serif'}}>
      <Container>
        <Navbar.Brand href="/" style={{color:'#0d6efd'}}>SANKHYA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/analytics">Analytics</Nav.Link>
          </Nav>
          <Nav className="ml-auto"> 
            <Nav.Link href="/auth">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
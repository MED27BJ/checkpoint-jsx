// this component return aa responsive Navbar is not required in the checkpoint but I should practice other thing reponsive 
// importattion from bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// The main the component I have changed some words to be specifics
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Private Space for Beji Mohamed </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#vision">Visions</Nav.Link>
            <Nav.Link href="#strtegie">Strategies</Nav.Link>
            <NavDropdown title="More Informations" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Progress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Improvments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Needs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// export of the component
export default CollapsibleExample;
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import CarWidget from "../CartWidget/CarWidget";
import Logo from "../Logo/Logo";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="logo">
            <Logo />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarS" />
        <Navbar.Collapse id="navbarS">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/category/Pc">Pc</Nav.Link>
            <Nav.Link as={Link} to="/category/Xbox">Xbox</Nav.Link>
            <Nav.Link as={Link} to="/category/PlayStation">PlayStation</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <CarWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

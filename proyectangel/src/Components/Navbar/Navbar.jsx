import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../Logo/Logo';
import './Navbar.css'

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarS" />
                    <Navbar.Collapse id="navbarS">
                        <Nav className="ms-auto">
                            <Nav.Link href="#pc">Pc</Nav.Link>
                            <Nav.Link href="#xbox">Xbox</Nav.Link>
                            <Nav.Link href="#playstation">PlayStation</Nav.Link>
                            <Nav.Link><CarWidget /></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../Logo/Logo';
import './Navbar.css'
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to = '/'>
                    <Navbar.Brand className='logo' href="#home"><Logo/></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarS" />
                    <Navbar.Collapse id="navbarS">
                        <Nav className="ms-auto">
                            <Nav.Link href="/category/Pc">Pc</Nav.Link>
                            <Nav.Link href="/category/Xbox">Xbox</Nav.Link>
                            <Nav.Link href="/category/PlayStation">PlayStation</Nav.Link>
                            <Nav.Link><CarWidget /></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
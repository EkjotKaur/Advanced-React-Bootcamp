import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
    return <Navbar bg="dark" data-bs-theme="dark">

        <Navbar.Brand href="#home">Acme</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
            <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
            <Nav.Link as={Link} to='/new_product'>New Product</Nav.Link>
        </Nav>

    </Navbar>
}
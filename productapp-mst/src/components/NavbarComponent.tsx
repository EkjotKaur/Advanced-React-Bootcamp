import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../mobx/models/Root';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

function NavbarComponent() {
    let store = useContext(RootStoreContext);
    return <Navbar bg="dark" data-bs-theme="dark">

        <Navbar.Brand href="#home">Acme</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
            <Nav.Link as={Link} to='/cart'>
                Cart
                <Badge>{store?.cart.quantity}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to='/customers'>Customers</Nav.Link>
            <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
            <Nav.Link as={Link} to='/new_product'>New Product</Nav.Link>
        </Nav>

    </Navbar>
}

export default observer(NavbarComponent);
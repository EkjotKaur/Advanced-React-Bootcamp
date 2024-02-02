
import { Button, Container } from "react-bootstrap";
import CartRow from "./CartRow";
import { useContext } from "react";
import { CartContext } from "..";
import { observer } from "mobx-react-lite";

function CartComponent() {
    let cartStore = useContext(CartContext);
    return <Container>
        {
            cartStore.cart.map(product => <CartRow key={product.id} product={product} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">{cartStore.total}</div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button>Checkout</Button>
            </div>
        </div>
    </Container>
}

export default observer(CartComponent);

import { Button, Container } from "react-bootstrap";
import CartRow from "./CartRow";
import { useContext } from "react";

import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../mobx/models/Root";

function CartComponent() {
    let store = useContext(RootStoreContext);
    return <Container>
        {
            store?.cart.items.map(product => <CartRow key={product.id} product={product} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">{store?.cart.total}</div>
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
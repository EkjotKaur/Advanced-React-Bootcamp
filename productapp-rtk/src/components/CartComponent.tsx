
import { Button, Container } from "react-bootstrap";
import CartRow from "./CartRow";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearCart } from "../redux/features/CartSlice";

export default function CartComponent() {
    let { cartItems, total } = useAppSelector(state => state.cart);
    let dispatch = useAppDispatch();
    return <Container>
        {
            cartItems.map(product => <CartRow key={product.id} product={product} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">{total}</div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button onClick={() => dispatch(clearCart())}>Checkout</Button>
            </div>
        </div>
    </Container>
}
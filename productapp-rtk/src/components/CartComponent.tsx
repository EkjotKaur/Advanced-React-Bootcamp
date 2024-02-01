
import { Button, Container } from "react-bootstrap";
import CartRow from "./CartRow";

export default function CartComponent() {

    return <Container>

        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">{total}</div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button onClick={() => checkout()}>Checkout</Button>
            </div>
        </div>
    </Container>
}
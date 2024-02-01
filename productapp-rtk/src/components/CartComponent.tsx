
import { Button, Container } from "react-bootstrap";
import CartRow from "./CartRow";

export default function CartComponent() {

    return <Container>

        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2"></div>
        </div>
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button>Checkout</Button>
            </div>
        </div>
    </Container>
}
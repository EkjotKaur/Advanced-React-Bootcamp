import React, { useContext } from 'react'
import CartItem from '../model/CartItem'
import { Button } from 'react-bootstrap';
import { CartContext } from '..';
import { observer } from 'mobx-react-lite';
type PropType = {
    product: CartItem
}
 function CartRow(props: PropType) {
    let { id, title, image, price, amount, quantity, description } = props.product;
    let cartStore = useContext(CartContext);

    return (
        <div className='row'>
            <div className='col-md-2'>
                <img src={image} style={{ "width": "50px" }} />
            </div>
            <div className='col-md-2'>
                {title}
            </div>
            <div className='col-md-4'>
                <Button>-</Button>
                {quantity}
                <Button onClick={() => cartStore.increment(id)}>+</Button>
            </div>
            <div className='col-md-2'>
                Price : {price}
            </div>
            <div className='col-md-2'>
                Amount: {amount}
            </div>
        </div>
    )
}

export default observer(CartRow);
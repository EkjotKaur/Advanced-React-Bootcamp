import React from 'react'
import CartItem from '../model/CartItem'
import { Button } from 'react-bootstrap';
type PropType = {
    product: CartItem
}
export default function CartRow(props: PropType) {
    let { id, title, image, price, amount, quantity, description } = props.product;
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
                <Button>+</Button>
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

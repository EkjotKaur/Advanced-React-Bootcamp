import React from 'react'
import Card from 'react-bootstrap/Card';

import Product from '../model/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
type Proptype = {
    product: Product
}
export default function ProductCard(props: Proptype) {
    let { id, title, image, price, description } = props.product;
    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {price}
                    <FontAwesomeIcon color='blue' icon={faHeart} />
                    <FontAwesomeIcon color='red' icon={faShoppingCart} />
                </Card.Footer>
            </Card>
        </div>
    )
}

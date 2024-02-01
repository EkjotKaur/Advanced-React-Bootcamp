import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Product from '../model/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlice';
import { useAppDispatch } from '../redux/store';
type Proptype = {
    product: Product
}
export default function ProductCard(props: Proptype) {

    let { id, title, image, price, description } = props.product;
    const dispatch = useAppDispatch();
    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Link to={`/details/${id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <span className='left'>
                        Rs. {price}
                    </span>
                    <span className='right px-2'>
                        <FontAwesomeIcon color='blue' icon={faHeart} />
                        <FontAwesomeIcon
                            color='red' icon={faShoppingCart}
                            onClick={() => dispatch(addToCart({
                                id,
                                title,
                                description,
                                image,
                                price,
                                quantity: 1,
                                amount: price
                            }))}
                        />
                    </span>

                </Card.Footer>
            </Card>
        </div>
    )
}

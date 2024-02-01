import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../model/Product';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function Details() {
  let [product, setProduct] = useState<Product>();
  let { id } = useParams();
  // componentDidUpdate
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id).then(response => {
      setProduct(response.data);
    })
  }, [id]);
  return (
    <Container>
      {
        product && <div>
          <img src={product.image} /> <br />
          {product.title}
        </div>
      }
    </Container>
  )
}

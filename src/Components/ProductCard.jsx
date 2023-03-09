import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  // console.log(item)
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pic} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.price}
        </Card.Text>
        <Link to={`/info/${item.id}`}>
        <Button variant="primary">Go somewhere</Button>
        </Link>

      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard
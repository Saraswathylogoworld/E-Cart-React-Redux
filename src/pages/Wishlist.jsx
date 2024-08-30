import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromwishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
  const wishlistitem = useSelector((state) => state.wishlistReducer);
  console.log("ALl item===");
  console.log(wishlistitem);
  const dispatch = useDispatch();
  const handleWishlist =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromwishlist(item.id))
  }
  return (
    <>
      <Button className='btn btn-succes mt-4 mb-4'>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to Home
        </Link>
      </Button>
      <Row className='m-5'>
        {
          wishlistitem?.length > 0 ?
            wishlistitem.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={"200px"} className='p-3' />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>Price: &#x20B9; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromwishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" onClick={() => handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div style={{ height: '100vh',backgroundColor:'#FAF6F5' }} className='d-flex justify-content-center align-items-center'>
            <img src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png"  alt="" height="300px" />
            <h3 className='text-danger fw-bold'>EMPTY CART</h3>

            </div>
        }
      </Row>
    </>
  )
}

export default Wishlist
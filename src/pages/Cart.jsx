import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  //hook user to navigate a particular path or page
const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach((item) => {
      sum = sum + item.price;
    })
    setTotal(sum)
  }
  useEffect(() => {
    getTotal();
  }, [cartArray])
const handleCart =()=>{
  alert("Thank You to Vist 'ORDER IS SUCCESSFULLY PLACER'")
  dispatch(emptyCart());
  navigate('/')
}

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {
          cartArray?.length > 0 ?
            <div className='row w-100'>
              <div className='col-lg-6 m-5'>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray?.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title.slice(0, 20)}...</td>
                          <td><img src={item.image} height="25px" widtd="25px" /></td>
                          <td>₹{item.price}</td>
                          <td><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                        </tr>
                      ))
                    }

                  </tbody>
                </Table>
              </div>
              <div className='col-lg-4' style={{ marginTop: "45px" }}>
                <div className='border shadow p-5' >
                  <h3 className='text-primary'>Cart Summary</h3>
                  <h4>Total Number of Products : <span className='text-warning fw-bolder'>{cartArray?.length}</span></h4>
                  <h4>Total Price : <span className='text-warning fw-bolder'>₹ {total}</span></h4>
                  <button className='btn btn-success rounded w-100' onClick={handleCart}>CHECKOUT</button>
                </div>
              </div>
            </div> :
            <div style={{ height: '100vh',backgroundColor:'#FAF6F5' }} className='d-flex justify-content-center align-items-center'>
              <img src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png"  alt="" height="300px" />
              <h3 className='text-danger fw-bold'>EMPTY CART</h3>

            </div>
        }
      </div>
    </>
  )
}

export default Cart

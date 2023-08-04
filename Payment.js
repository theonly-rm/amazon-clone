import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Payment() {
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='Payment'>
        <div className='payment__container'>
            <h1>
                Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>

            {/* Payment Section --- delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                     <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123/4 Test Apartments</p>
                    <p>New Delhi, India</p>
                </div>

            </div>

            {/* Payment Section --- Review Items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment__items'>
                {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
                </div>
                
            </div>

            {/* Payment Section --- Payment Method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/*RAZORPAY MAGIC*/}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment
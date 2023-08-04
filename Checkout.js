import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket , user}, dispatch] = useStateValue();
  return (
    <div className='Checkout'>
        <div className='checkout__left'>
            <img 
            className = 'checkout__ad'
             src='https://m.media-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopSWM_400x39._CB593034217_.jpg' 
            alt=''
            />

            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Cart</h2>

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

        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout
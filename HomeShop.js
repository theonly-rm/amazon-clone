import React from 'react'
import Product from "./Product"
import './HomeShop.css'

function HomeShop() {
  return (
    <div className='HomeShop'>
        <div className='home__categories'>
            <div className='box1 box'>
              
                <h2>Great Freedom Sale</h2>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/T1_PC_CC_1X._SY304_CB598888437_.jpg' />
                <p>See more</p>
                
            </div> 
            <div className='box1 box'>
                
                <h2>Up to 70% off | Clearance store</h2>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' />
                <p>See more</p>
                
            </div> 
            <div className='box1 box'>

            <h2>Up to 60% off | Styles for men</h2>
                <img src='https://i.ibb.co/Dr2MW0t/image.png' />
                <p>See more</p>

            </div> 
            <div className='box1 box'>
                
                <h2>Keep shopping for</h2>
                <img src='https://i.ibb.co/G9vr07K/image.png' />
                <p>See more</p>
                
            </div> 
        </div>

    </div>  
  )
}

export default HomeShop
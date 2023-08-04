import React from 'react';
import './Home.css';
import Product from './Product';
import HomeShop from './HomeShop';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PC_Hero_3000x1200_ShopNow_EN_2x._CB599321536_.jpg" />
        </div>

        <HomeShop />

        <div className='home__row'>

        <div className='home__row1'>
             <Product title='boAt Xtend Smartwatch with Alexa Built-in, 1.69 HD Display, Multiple Watch Faces, Stress Monitor' price={4999}
                      image='https://m.media-amazon.com/images/I/61IMRs+o0iL._SX679_.jpg'  
                       rating={5} />
             <Product title='realme 11 Pro 5G (Sunrise Beige, 8GB RAM, 256GB Storage)' price={28999}
                      image='https://m.media-amazon.com/images/I/81eoabezOsL._AC_UY327_FMwebp_QL65_.jpg'  
                      rating={3} />
             <Product image='https://m.media-amazon.com/images/I/810JR81LIsL._SL1500_.jpg'  
             title='Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch w/Rugged Titanium Case & Midnight Ocean Band' price={91600}
                      rating={4}/>         
          </div>

        <div className='home__row2'>
             <Product title='Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)' price={999} 
                      image='https://m.media-amazon.com/images/I/51DY+QrEpOL._SX679_.jpg'  
                      rating={5}   />
             <Product title='Bluetooth Calling Smartwatch starts at ₹ 1999' price={1999}
                      image='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'  
                      /* rating={3}*/ />
              <Product title='Apple iPhone 14 Pro (128 GB) - Gold' price={129999}
                      image='https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg'  
                      rating={4}/>
             
        </div>

        <div className='home__row3'>
        <Product title='Laptops starting from' price={4999}
                      image='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a804e411-6644-4279-8917-451b03223726._CR0,0,1200,628_SX507_QL70_.png'  
                       rating={5} />
             
        </div>
         </div>
         </div>
  );
}

export default Home
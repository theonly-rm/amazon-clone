import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
        <div className='foot__panel'>
            Back To Top
        </div>

        <div className='footer__column'>
            <ul>
            <p>Get to Know Us</p>
             <a>About Us</a>
             <a>Careers</a>
             <a>Press Releases</a>
             <a>Amazon Science</a>
            </ul>

            <ul>
            <p>Connect with Us</p>
             <a>Facebook</a>
             <a>Twitter</a>
             <a>Instagram</a>
            </ul>

            <ul>
            <p>Make Money with Us</p>
             <a>Sell on Amazon</a>
             <a>Sell under Amazon Accelerator</a>
             <a>Protect and Build Your Brand</a>
             <a>Amazon Global Selling</a>
             <a>Become an Affiliate</a>
             <a>Fulfilment by Amazon</a>
             <a>Advertise Your Products</a>
             <a>Amazon Pay on Merchants</a>
            </ul>

            <ul>
            <p>Let Us Help You</p>
             <a>Your Account</a>
             <a>Returns Centre</a>
             <a>100% Purchase Protection</a>
             <a>Amazon App Download</a>
             <a>Help</a>
            </ul>
        </div>

        <div className='footer__foot'>
            <div className='logo'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' />
            </div>
        </div>

        <div className='footer__copy'>
            <div className='pages'>
                <a>Conditions of Use & Sale</a>
                <a>Privacy Notice</a>
                <a>Interest-Based Ads</a>
            </div>

            <div className='copyright'>
            © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>

    </div>
  )
}

export default Footer
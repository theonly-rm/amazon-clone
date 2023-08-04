import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './Panel.css'
function Panel() {
  return (
    <div className='panel'>
          <div className='panel__menu'>
            <MenuOutlinedIcon /> All
          </div>

          <div className='panel__options'>
                <p>Amazon miniTV</p>
                <p>Sell</p>
                <p>Amazon Pay</p>
                <p>Gift Cards</p>
                <p>Buy Again</p>
                <p>Gift Ideas</p>
          </div>

           <div className='panel__deals'>
            Shop Deals in Electronics
           </div>
    </div>
  )
}

export default Panel
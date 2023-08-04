import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const[{basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
        <Link to="/">
        <img 
            className="header__logo border"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
            />

        </Link>

        <div className='header__address border'>
            <p className='address_first'>Deliver to</p>
            <div className="address_icon">
            <LocationOnOutlinedIcon />
            <p className='address_second'>India </p>
            </div>
        </div>
            
        
        <div className='header__search'>
              <select className='search__select'>
                <option>
                  All
                </option>
              </select>
            <input
            placeholder='Search Amazon'
            className="header__searchInput" type="text" />
            <SearchIcon
            className='header__searchIcon' />
        </div>

        <div className='header__nav'>

            <Link to= {!user && "/login"}>
            
            <div onClick={handleAuthentication}className='header__option border'>
                <span 
                className='header__optionLineOne'>Hello {!user? 'Guest' : user.email}</span>
                <span 
                className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In' }</span>
            </div>

            </Link>

            <div className='header__option border'> 
            <span 
                className='header__optionLineOne'>Returns</span>
            <span 
                className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option border'> 
            <span 
                className='header__optionLineOne'>Your</span>
            <span 
                className='header__optionLineTwo'>Prime</span>
            </div>

          <Link to="/checkout">
            <div className="header__OptionBasket border">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketcount">{basket?.length}</span>
            </div>
          </Link>

        </div>
        

    </div>

    
  );
}

export default Header

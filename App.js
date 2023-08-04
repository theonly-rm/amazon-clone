import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from "./Home"
import Product from "./Product"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Checkout from './Checkout';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Panel from './Panel.js';
import HomeShop from './HomeShop';
import Footer from './Footer';

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    document.title = 'Amazon Clone';
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ',authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
      })
    }
   })
  }, [])
   return (
    // BEM Convention
    <Router>
        <div className="app">

        <Switch>

        <Route path='/payment'> 
            <Header />
            < Payment />
          </Route>  

        <Route path='/login'> 
            <Login />
          </Route>

        <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>   

          <Route path='/'> 
           <Header />
           <Panel />
           <Home />
            <HomeShop />
            <Footer />
          </Route>

        </Switch>
        </div>
    </Router>    
        
      
  );
}

export default App;

import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
                history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    
  return (
    <div className='login'>
        <Link to= "/">
        <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322'
        />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value = {email} onChange=
                {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password}
                onChange= {e => setPassword(e.target.value)} />

                <button type = 'submit'onClick={signIn}
                className='signinbutton'>Sign In</button>
            </form>
            <p>
            By continuing, you agree to 
            Amazon-Clone's Conditions of 
            Use and Privacy Notice.
            </p>

            <button onClick={register}
            className='registerbutton'>Create Your Amazon Account</button>
        </div>

    </div>
  )
}

export default Login
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('';)

  const register = () => {
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png' />
      <form>
        <input placeholder='Full Name (required if registering)' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='Profile pic URL (optional)' type='text' />
        <input type='email' placeholder='Email' value={email} oncChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

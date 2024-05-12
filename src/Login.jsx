import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png' />
      <form>
        <input placeholder='Full Name (required if registering)' type='text' />
        <input placeholder='Profile pic URL (optional)' type='text' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
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

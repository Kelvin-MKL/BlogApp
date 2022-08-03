import React, { useRef } from "react";
import authService from "../services/authService";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = {
      username: usernameRef.current.value.toLowerCase(),
      password: passwordRef.current.value,
    };

    try {
      authService.login(existingUser);

      console.log("You are now logged in!");
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <h4>Sign In</h4>
        <label htmlFor='username' className='username'>
          Username
        </label>

        <input
          placeholder='Enter Username'
          required
          type='email'
          id='username'
          ref={usernameRef}
        ></input>

        <label htmlFor='password' className='password'>
          Password
        </label>

        <input
          placeholder='Enter Password'
          required
          type='text'
          id='password'
          ref={passwordRef}
        ></input>

        <button type='submit' className='btn-custom'>
          SIGN IN
        </button>
      </div>
    </form>
  );
}
export default Login;

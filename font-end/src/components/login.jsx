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
    <>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
        <label htmlFor='username'>Username</label>
        <br></br>
        <input required type='email' id='username' ref={usernameRef}></input>
        <br />
        <br />

        <label htmlFor='password'>Password</label>
        <br></br>
        <input required type='text' id='password' ref={passwordRef}></input>
        <br />
        <br />
        <button type='submit' className='btn btn-success'>
          Login
        </button>
        <a href='/' className='btn btn-secondary'>
          Cancel
        </a>
      </form>
    </>
  );
}
export default Login;

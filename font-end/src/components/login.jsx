import React, { useRef, useState } from "react";
import authService from "../services/authService";

function Login() {
  const [error, setError] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = {
      username: usernameRef.current.value.toLowerCase(),
      password: passwordRef.current.value,
    };

    setError("");
    try {
      authService
        .login(existingUser)
        .catch((res) => setError(res.response.data.error));
    } catch (err) {
      console.log("Connection issue occurs.");
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
          type='password'
          id='password'
          ref={passwordRef}
        ></input>

        <div style={{ paddingBottom: "5px", color: "red" }}>{error}</div>

        <button type='submit' className='btn-custom'>
          SIGN IN
        </button>
      </div>
    </form>
  );
}
export default Login;

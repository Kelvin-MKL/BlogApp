import React, { useRef } from "react";
import http from "../services/httpService";

function RegisterUser() {
  const usernameRef = useRef();
  const nicknameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: usernameRef.current.value.toLowerCase(),
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await http.post(
        "http://localhost:5000/users/register",
        newUser
      );

      if (response.data.Error == null) {
        window.location = "/registered";
      }

      console.log("You are now registered!");
      console.log(response);
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Register </h4>
        <label htmlFor='username'>Username</label>
        <br></br>
        <input required type='email' id='username' ref={usernameRef}></input>
        <br />
        <br />
        <label htmlFor='nickname'>Nickname</label>
        <br></br>
        <input required type='text' id='nickname' ref={nicknameRef}></input>
        <br />
        <br />
        <label htmlFor='password'>Password</label>
        <br></br>
        <input required type='text' id='password' ref={passwordRef}></input>
        <br />
        <br />
        <button type='submit' className='btn btn-success'>
          Register
        </button>
        <a href='/' className='btn btn-secondary'>
          Cancel
        </a>
      </form>
    </>
  );
}
export default RegisterUser;

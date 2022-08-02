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
        <div className='form-container'>
          <h4>Register </h4>
          <label htmlFor='username'>Username</label>

          <input required type='email' id='username' ref={usernameRef}></input>

          <label htmlFor='nickname'>Nickname</label>

          <input required type='text' id='nickname' ref={nicknameRef}></input>

          <label htmlFor='password'>Password</label>

          <input required type='text' id='password' ref={passwordRef}></input>

          <button type='submit' className='btn btn-success'>
            REGISTER
          </button>
        </div>
      </form>
    </>
  );
}
export default RegisterUser;

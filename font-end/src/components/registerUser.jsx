import React, { useRef, useState } from "react";
import http from "../services/httpService";

function RegisterUser() {
  const [passwordDisplay, setPasswordDisplay] = useState("password");
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

  const togglePasswordDisplay = () => {
    passwordDisplay === "text"
      ? setPasswordDisplay("password")
      : setPasswordDisplay("text");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <h4>Register </h4>
          <label htmlFor='username' className='username'>
            Username
          </label>

          <input
            placeholder='Enter email'
            required
            type='email'
            id='username'
            ref={usernameRef}
          ></input>

          <label htmlFor='nickname' className='nickname'>
            Nickname
          </label>

          <input
            placeholder='Enter nickname'
            required
            type='text'
            id='nickname'
            ref={nicknameRef}
          ></input>

          <label htmlFor='password' className='password'>
            Password
          </label>

          <input
            placeholder='Enter password'
            required
            type={passwordDisplay}
            id='password'
            ref={passwordRef}
          ></input>
          <div>
            <label
              style={{
                paddingRight: "10px",
                paddingBottom: "10px",
                fontSize: "smaller",
              }}
            >
              Show password
            </label>
            <input type='checkbox' onClick={togglePasswordDisplay}></input>
          </div>
          <button type='submit' className='btn-custom'>
            REGISTER
          </button>
        </div>
      </form>
    </>
  );
}
export default RegisterUser;

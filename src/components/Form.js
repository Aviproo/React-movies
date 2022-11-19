import "./Components.css";

import React, { useState } from "react";
import Button from "./Button";
const Form = (props) => {
  const [username, setusername] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userpassword.trim().length === 0) {
      return;
    }
    console.log(username, userpassword);
    setusername("");
    setuserpassword("");
  };
  const usernamehandeler = (event) => {
    setusername(event.target.value);
  };
  const userpassworhandeler = (event) => {
    setuserpassword(event.target.value);
  };

  return (
    <form className="formbox" onSubmit={submit}>
      <h2>Login Page</h2>
      <label>User Name</label>
      <input
        value={username}
        className="input"
        type={"email"}
        placeholder="Name"
        onChange={usernamehandeler}
      />
      <label>Password</label>
      <input
        value={userpassword}
        type={"password"}
        className="input"
        placeholder="Password"
        onChange={userpassworhandeler}
      />
      <button type="submit" className="submit">
        Add user
      </button>
    </form>
  );
};
export default Form;

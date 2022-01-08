import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import  data from "./data";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [entry, setEntry] = useState([]);
  const [err, setErr] = useState(false)
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setEntry([...entry, newEntry]);
    setEmail("");
    setpassword("");
  };
  const isValidData = (email) => {
    if (email.length === 0 || email.length > 50) return true;
    if (data.users.filter(val =>  val.email === email && val.password === password ).length === 0) return true;
  }

  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    if (isValidData(email, password)) {
      setErr(true)
    } else {
      navigate('/mailBox')
    }
   
  }

  return (
    <div className="main_div">
      <div className="box">
        <form action="" method="" onSubmit={submitHandler}>
          <h1>Welcome!</h1>
          <div className="inputBox">
            <label htmlFor="email" className="username-css">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="inputBox">
            <label htmlFor="password" className="password-css">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            <div style={{ color: "red" }}>{err ? <p>email/password is wrong:</p>: ""}</div>
          </div>
          <button type="button" onClick={buttonSubmitHandler}>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

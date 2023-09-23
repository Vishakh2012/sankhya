import React, { useState } from "react"
import { useRef } from "react";
import { useContext } from "react";
import { context } from "../../context/Provider";

export default function Auth(props) {
  //refrence varibles
  const ctx = useContext(context);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authuserRef = useRef();
  const authpasswordRef = useRef();

  //handle submit function request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsondata = {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const response = await fetch("http://localhost:8000/api/signup/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsondata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("something went wrong");
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
    userNameRef.current.value = "";
  };
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  console.log(ctx.user);

  if (authMode === "signin") {
    return ( 
      <div className="Auth-form-container mx-5 mt-5">
        <form className="Auth-form" onSubmit={ctx.login}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>username</label>
              <input
                name="username"
                ref={authuserRef}
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                ref={authpasswordRef}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container mx-5 mt-5">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              ref={userNameRef}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              ref={emailRef}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
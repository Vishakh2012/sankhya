import { createContext } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";

//create and initialize context
export const context = createContext({
  accesToken: null,
  setAccesToken: () => {},
  user: null,
  login: () => {},
  authenticated: false,
});

//provider component
const Provider = (props) => {
  //states
  const [accesToken, setAccesToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isauthenticated, setIsAuthenticated] = useState(false);
  console.log(user);
  //function definitions
  const login = async (e) => {
    e.preventDefault();
    //getting data from the user
    const username = e.target.username.value;
    const password = e.target.password.value;
    const json = { username, password };
    console.log(json)
    //sending request to get get the tokens
    const response = await fetch("http://localhost:8000/api/token/", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const accesToken = data.access;
      setAccesToken(data);
      const decoded_token = jwt_decode(accesToken);
      const username = decoded_token["username"];
      setUser(username);
      setIsAuthenticated(true);
    } else {
      console.log("Something went wrong");
    }
  };
  const value = {
    accesToken,
    setAccesToken,
    login,
    user,
    authenticated: isauthenticated,
  };
  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default Provider;
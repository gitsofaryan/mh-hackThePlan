import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button
  style={{
    "backgroundColor":"black",
    "color":"white",
    "padding":"1rem"
  }}
  className="loginButton" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
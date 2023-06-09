import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <a
    style={{
      cursor: 'pointer'
    }}
    className="loginButton" onClick={() => loginWithRedirect()}>Log In</a>;
};

export default LoginButton;
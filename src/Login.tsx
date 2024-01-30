import { Button } from "antd";
import * as React from "react";

const Login = () => {
  console.log("Login");
  const getGoogleOAuthToken = () => {
    console.log("google");
  };

  return <Button onClink={getGoogleOAuthToken}>Sign With Google</Button>;
};

export default Login;

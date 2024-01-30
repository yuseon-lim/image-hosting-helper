import * as React from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import Login from "./Login";

function App() {
  const isAuthenticated = () => {
    // localstorage에서 token 저장 확인하기
    return true;
  };
  return isAuthenticated() ? <FileUpload /> : <Login />;
}

export default App;

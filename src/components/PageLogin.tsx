import React from "react";
import Login from "./Login";

const PageLogin: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <Login />
      </header>
    </div>
  );
};

export default PageLogin;

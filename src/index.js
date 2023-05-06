import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import Wrapper from "./tools/wrappers";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <Root />
  </Wrapper>
);

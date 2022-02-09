import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import client from "./utils/client";
import { ApolloProvider } from "@apollo/react-hooks";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

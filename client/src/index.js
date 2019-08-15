import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./components/App";
import "./style.css";

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.API_ENDPOINT
  }),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

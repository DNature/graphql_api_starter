import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const httpLink = createUploadLink({
  ssrMode: true,
  uri: "http://localhost:4000/",
  credentials: "same-origin"
});

/*
TODO: Authorization Headers
const authLink = setContext(()=> {
    const token = localStorage.getItem("jwtToken");
    return {
        headers: {
            Authorization: token && `Bearer ${token}`
        }
    }
})
*/

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

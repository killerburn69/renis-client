import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
  headers: {
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  },
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${JSON.parse(token).Access_Token}`
        : "",
      "Access-Control-Allow-Origin": "*",
      credentials: "include",
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

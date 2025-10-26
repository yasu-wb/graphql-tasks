import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const authLink = new SetContextLink((prevContext, operation) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...prevContext.headers,
      authorization: token? `Bearer ${token}`: ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client;

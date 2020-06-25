import React from 'react';
import './App.css';
import Query from './component/Query'
import { createClient, Provider } from 'urql';
const client = createClient({ url: '/graphql' });
// import ApolloClient from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'

function App() {
  return (
    <Provider value={client}>
      <Query>{({ data, error }) => {
        if(data && data.todos) {
          return <div>{
            data.todos.map((item) =>{
              return (<div key={item.id}>{item.text}</div>)
            })
          }</div>
        }
        return <div>{error}</div>
      }}</Query>
    </Provider>
  );
}

export default App;

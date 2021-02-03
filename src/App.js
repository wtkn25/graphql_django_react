import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Auth from './components/Auth';
import MainPage from './components/MainPage';
import StateContextProvider from './context/StateContext';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
  headers: {
    authorization: localStorage.getItem("token")
      ? `JWT ${localStorage.getItem("token")}`
      : ""
  },
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <StateContextProvider>
        <div className={styles.app}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/employees" component={MainPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </StateContextProvider>
    </ApolloProvider>

  );
}

export default App;

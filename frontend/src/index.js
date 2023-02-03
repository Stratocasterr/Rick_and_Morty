import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import fonts from './styles/fonts.css'
import pageStyle from './styles/pageStyle.css'
import desktopView from './styles/desktopView.css'
import mobileView from './styles/mobileView.css'
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri:`https://rickandmortyapi.com/graphql`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);
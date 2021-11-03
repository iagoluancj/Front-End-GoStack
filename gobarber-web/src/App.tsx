import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './context/index';

import Routes from './routes';


const App: React.FC = () => ( 
  <Router>
    <AppProvider>
        <Routes/>
    </AppProvider>
    <GlobalStyle></GlobalStyle>
  </Router>
);

export default App;

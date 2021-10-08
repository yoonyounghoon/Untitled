import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;

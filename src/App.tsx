import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
// import ChattingPage from './pages/ChattingPage';
import JoinPage from './pages/JoinPage';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} /> */}
        <Route path="/join" component={JoinPage} />
        {/* <Route path="/chatting" component={ChattingPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const AppLayout = styled.div``;
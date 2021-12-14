import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {
  JoinPage,
  LoginPage,
  MainPage,
  MyPage,
  ProductDetailPage,
  ProductRegisterPage,
  SellerPage,
} from './pages';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/sellerInfo" component={SellerPage} />
        <Route path="/product-register" component={ProductRegisterPage} />
        <Route path="/products" component={ProductDetailPage} />
        <Route path="/myPage" component={MyPage} />
        {/* <Route path="/chatting" component={ChattingPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import { Footer } from 'antd/lib/layout/layout';
import { Route, BrowserRouter } from 'react-router-dom';
import Historico from './pages/Historico/Historico';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/historico" component={Historico} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

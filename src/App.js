import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import { Footer } from 'antd/lib/layout/layout';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Historico from './pages/Historico/Historico';
import GlobalStyle from './GlobalStyle';
import Projeto from './pages/Projeto/Projeto';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historico" component={Historico} />
          <Route path="/:id" component={Projeto}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

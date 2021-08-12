import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Footer } from 'antd/lib/layout/layout';
import { Route, BrowserRouter } from 'react-router-dom';
import Historico from './pages/Historico';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/historico" component={Historico} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

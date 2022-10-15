import './App.css';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/home';
import Footer from './components/footer/footer.jsx';
import Detail from './components/detail/detail.jsx';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
          <div className="App">
            <Route path='/' component={Navbar}/>
            <Route exact path='/' component={Home}/>
            <Route path="/" component={Footer} />
            <Route path="/:id" component={Detail} />
          </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

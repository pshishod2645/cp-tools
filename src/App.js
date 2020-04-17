import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProblemFilter from './components/ProblemFilter'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(process.env.PUBLIC_URL, 'heeloo')
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {ProblemFilter} /> 
          <Route exact path = '/problem-filter' component = {ProblemFilter} /> 
          <Route path = '*' component = {NotFound} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

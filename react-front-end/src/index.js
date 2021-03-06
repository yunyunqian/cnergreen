import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.css';

// components
import App from './App';
import Main from './components/Main/Main'
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Solution from './components/Solution';
import Team from './components/Team';




const routing = (
    <div>
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/solution" component={Solution} />
            <Route path="/blog" component={Blog} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
    </div>
  );

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

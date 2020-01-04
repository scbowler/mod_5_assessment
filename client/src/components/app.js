import React from 'react';
import { Route } from 'react-router-dom';
import Example from './example';
import Home from './home';
import '../assets/css/app.scss';

const App = () => (
    <div className="app">
        <Route exact path="/" component={Home} />
        <Route path="/example" component={Example} />
    </div>
);

export default App;

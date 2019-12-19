import React from 'react';
import ReactDOM from 'react-dom';
import PartiesComponent from './Components/PartiesComponent';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

(function initialize() {
    var routers =
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PartiesComponent} />
            <Route exact path='/parties' component={PartiesComponent} />
            <Route path='/parties/:id/participants' component={PartiesComponent} />
            <Route path='/parties/:id' component={PartiesComponent} />
        </Switch>
    </BrowserRouter>;

ReactDOM.render(
    routers,
    document.getElementById('container')
);
})();

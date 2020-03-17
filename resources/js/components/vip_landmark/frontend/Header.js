
import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import Information from "./Information";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/information">Information</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/information' component={Information} />
                </Switch>
            </div>
        </Router>
    );
}

export default Header;


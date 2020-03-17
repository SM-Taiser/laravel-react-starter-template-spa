import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import User from "../users/User";

function Sidebar(){
    return (
        <Router>
          <nav class="page-sidebar" id="sidebar">
            <div id="sidebar-collapse">
                <div class="admin-block d-flex">
                    <div>
                        <img src="/public/backend/images/admin-avatar.png" width="45px" />
                    </div>
                    <div class="admin-info">
                        <div class="font-strong">SM Taiser</div><small>Administrator</small>
                    </div>
                </div>
                <ul class="side-menu metismenu">
                    <li>
                        <Link to="/admin/home" className="active"> <i class="sidebar-item-icon fa fa-th-large"></i> Dashboard  </Link>
                    </li>
                    <li>
                        <Link to="/admin/user" className="active"> <i class="sidebar-item-icon fa fa-user"></i> User Management</Link>
                    </li>
                    <li>
                        <a href="#"><i class="sidebar-item-icon fa fa-bookmark"></i>
                            <span class="nav-label">Basic UI</span><i class="fa fa-angle-left arrow"></i></a>
                        <ul class="nav-2-level collapse">
                            <li>
                             <Link to="/admin/home">Home</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route path='/admin/home' component={Home} />
            <Route path='/admin/user' component={User} />
        </Switch>
        </Router>
    );
}
export default Sidebar;
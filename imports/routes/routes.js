import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './../ui/Index'
import SideBar from './../ui/SideBar'
import Footer from './../ui/Footer'
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';
import Signup from './../ui/Signup';


const Routes = () => (
	<BrowserRouter>
		<div className="wholesite">
			<SideBar />
			<Switch>
				<Route path="/" component={Index} exact={true} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Routes;
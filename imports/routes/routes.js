import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './../ui/Index'
import Header from './../ui/Header'
import Footer from './../ui/Footer'
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';
import Signup from './../ui/Signup';


const Routes = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Index} exact={true} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default Routes;
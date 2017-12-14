import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './../ui/Index'
import Footer from './../ui/Footer'
import NotFound from './../ui/NotFound';

const Routes = () => (
	<BrowserRouter>
		<div className="wholesite">
			<Switch>
				<Route path="/" component={Index} exact={true} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default Routes;
import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import Routes from './../imports/routes/routes'

Tracker.autorun(() => {
});

Meteor.startup(() => {
	ReactDOM.render(<Routes />, document.getElementById('app'))
})

Bert.defaults = {
	hideDelay: 7500,
	// Accepts: a number in milliseconds.
	style: 'fixed-top',
	// Accepts: fixed-top, fixed-bottom, growl-top-left,   growl-top-right,
	// growl-bottom-left, growl-bottom-right.
	type: 'default'
	// Accepts: default, success, info, warning, danger.
  };
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
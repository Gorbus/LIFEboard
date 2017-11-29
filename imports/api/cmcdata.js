import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
 
export const CmcData = new Mongo.Collection('cmcdata');


if (Meteor.isServer) {
	Meteor.publish('cmcData', function() {
		return CmcData.find({last: 'last'});
	});

}
Meteor.methods({
	'cmcdata.insert'(last, data) {
		console.log('ici?');
		new SimpleSchema({
			last: {
				type: String,
				required: true,
				max: 280
			},
			data: {
				type: Object,
				blackbox: true
			}
		}).validate({ last, data });

		return CmcData.insert({
			last,
			data
		})
	},

	'cmcdata.update'(last, data) {
		new SimpleSchema({
			last: {
				type: String,
				required: true,
				max: 280
			},
			data: {
				type: Object,
				blackbox: true
			}
		}).validate({ last, data });

		CmcData.update({last : "last"}, {
			$set: {
				data: data
			}
		})
	},
})
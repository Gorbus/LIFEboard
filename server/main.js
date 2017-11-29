import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
});


Meteor.methods({
	getCMCdata(){
		let convertAsyncToSync = Meteor.wrapAsync(HTTP.call);
		let result = convertAsyncToSync('GET', 'https://api.coinmarketcap.com/v1/ticker/life', {});
		return result;
	},


	getHitBtcData(){
		let data = []
		let convertAsyncToSync = Meteor.wrapAsync(HTTP.call);
		let result1 = convertAsyncToSync('GET', 'https://api.hitbtc.com/api/2/public/ticker/LIFEBTC', {});
		data.push(result1);
		let result2 = convertAsyncToSync('GET', 'https://api.hitbtc.com/api/2/public/trades/LIFEBTC?sort=DESC', {});
		data.push(result2);
		let result3 = convertAsyncToSync('GET', 'https://api.hitbtc.com/api/2/public/orderbook/LIFEBTC', {});
		data.push(result3);

		return data;
	},

	getCeData(){
		let data = []
		let convertAsyncToSync = Meteor.wrapAsync(HTTP.call);
		let result1 = convertAsyncToSync('GET', 'https://www.coinexchange.io/api/v1/getmarketsummary?market_id=493', {});
		data.push(result1);
		let result2 = convertAsyncToSync('GET', 'https://www.coinexchange.io/api/v1/getorderbook?market_id=493', {});
		data.push(result2);

		return data;
	},

	getTidexData(){
		let data = []
		let convertAsyncToSync = Meteor.wrapAsync(HTTP.call);
		let result1 = convertAsyncToSync('GET', 'https://api.tidex.com/api/3/ticker/life_btc', {});
		data.push(result1);
		let result2 = convertAsyncToSync('GET', 'https://api.tidex.com/api/3/trades/life_btc', {});
		data.push(result2);
		let result3 = convertAsyncToSync('GET', 'https://api.tidex.com/api/3/depth/life_btc', {});
		data.push(result3);

		if (result1 && result2 && result3){
			return data;
		} else {
			return undefined;
		}
	}
});
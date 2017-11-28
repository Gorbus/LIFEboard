import React from 'react';


import WidgetCMC from './WidgetCMC';
import WidgetHitBtc from './WidgetHitBtc';
import WidgetCE from './WidgetCE';


export default class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cmcData : null,
			hitBtcData: null,
			CeData : null
		}

		this.callApi = this.callApi.bind(this);
	}

	componentDidMount(){
		this.callApi()
	}

	callApi() {
		Meteor.call('getCMCdata', (err, data) => {
			this.setState(() => ({ cmcData : data}))
		})

		Meteor.call('getHitBtcData', (err, data) => {
			this.setState(() => ({ hitBtcData : data}))
		})

		Meteor.call('getCeData', (err, data) => {
			this.setState(() => ({ CeData : data}))
		})

		setTimeout(() => this.callApi(), 15000)
	}

	render(){
		return (
			<div className="index">
				<WidgetCMC title={'Coin Market Cap'} cmcData={this.state.cmcData} />
				<WidgetHitBtc title={'Hitbtc'} hitBtcData={this.state.hitBtcData} />
				<WidgetCE title={'Coin Exchange'} CeData={this.state.CeData} />
			</div>
		)
	}
}
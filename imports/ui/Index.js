import React from 'react';


import WidgetCMC from './WidgetCMC';
import WidgetHitBtc from './WidgetHitBtc';
import WidgetCE from './WidgetCE';
import WidgetTidex from './WidgetTidex';


export default class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cmcData : null,
			hitBtcData: null,
			CeData : null,
			tidexData: null
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

		Meteor.call('getTidexData', (err, data) => {
			this.setState(() => ({ tidexData : data}))
		})

		setTimeout(() => this.callApi(), 15000)
	}

	render(){
		return (
			<div className="index">
				<div className="index__first">
					<WidgetCMC title={'Coin Market Cap'} cmcData={this.state.cmcData} />
				</div>
				<div className="index__second">
					<WidgetHitBtc title={'Hitbtc'} hitBtcData={this.state.hitBtcData} />
					<WidgetCE title={'Coin Exchange'} CeData={this.state.CeData} />
					<WidgetTidex title={'Tidex'} tidexData={this.state.tidexData} />
				</div>
			</div>
		)
	}
}
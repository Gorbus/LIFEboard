import React from 'react';


import WidgetCMC from './WidgetCMC';
import WidgetHitBtc from './WidgetHitBtc';
import WidgetCE from './WidgetCE';
import WidgetTidex from './WidgetTidex';
import WidgetFb from './WidgetFb';
import WidgetTwitter from './WidgetTwitter';
import WidgetInfos from './WidgetInfos';
import WidgetIcons from './WidgetIcons';


export default class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cmcData : null,
			hitBtcData: null,
			CeData : null,
			tidexData: null,
			FbData : null
		}

		this.callApi = this.callApi.bind(this);
	}

	componentDidMount(){
		this.callApi()
	}

	callApi() {
		Meteor.call('getCMCdata', (err, data) => {
			if(data && !err){
				this.setState(() => ({ cmcData : data}))	
			}
		})

		Meteor.call('getHitBtcData', (err, data) => {
			if(data && !err){
				this.setState(() => ({ hitBtcData : data}))
			}
		})

		Meteor.call('getCeData', (err, data) => {
			if(data && !err){
				this.setState(() => ({ CeData : data}))
			}
		})

		Meteor.call('getTidexData', (err, data) => {
			if(data && !err){
				this.setState(() => ({ tidexData : data}))
			}
		})

		setTimeout(() => this.callApi(), 45000)
	}

	render(){
		return (
			<div className="index">
				<div className="index__first">
					<div className="general__widgets">
						<WidgetIcons />
						<WidgetInfos />
					</div>
					<WidgetCMC title={'Coin Market Cap'} cmcData={this.state.cmcData} />
					<WidgetTwitter />
					<WidgetFb />
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
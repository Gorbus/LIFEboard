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
			FbData : null,
			btcData: null
		}

		this.callApiExchanges = this.callApiExchanges.bind(this);
		this.callApiCMC = this.callApiCMC.bind(this);
	}

	componentDidMount(){
		this.callApiExchanges();
		this.callApiCMC();
		Bert.alert({
			title: 'Help Lifeboard.me',
			message: 'If you want Lifeboard.me to continue beeing live, please consider donating to pay for hosting. ETH adress for donation is at the bottom of the page',
			type: 'success',
			style: 'fixed-top',
		  });
	}

	callApiExchanges() {
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

		setTimeout(() => this.callApiExchanges(), 45000)
	}

	callApiCMC() {
		Meteor.call('getCMCdata', (err, data) => {
			if(data && !err){
				this.setState(() => ({ cmcData : data[0], btcData: data[1]}))	
			}
		})
		setTimeout(() => this.callApiCMC(), 180000)
	}

	render(){
		return (
			<div className="index">
				<div className="index__first">
					<div className="general__widgets">
						<WidgetIcons />
						<WidgetInfos btcValue={this.state.btcData ? this.state.btcData.data[0].price_usd : null} lifeValue={this.state.cmcData ? this.state.cmcData.data[0].price_btc : null}/>
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
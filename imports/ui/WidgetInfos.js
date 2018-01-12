import React from 'react';
import moment from 'moment';


export default class WidgetInfos extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			btcValue : this.props.btcValue ? parseFloat(this.props.btcValue) : 15000,
			lifeValue : this.props.lifeValue ? parseFloat(this.props.lifeValue) * 1000000000 : 1,
			lifeUnits : 100000,
			totalBtc : this.props.lifeValue ? this.props.lifeValue * 100000 : 0.001,
			totalUsd : this.props.btcValue && this.props.lifeValue ? (this.props.btcValue * this.props.lifeValue * 100000) : 15000 * 0.001
		}

		this.btcValueChange = this.btcValueChange.bind(this);
		this.lifeUnitsChange = this.lifeUnitsChange.bind(this);
		this.lifeValueChange = this.lifeValueChange.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState){
		if (this.props.btcValue === nextProps.btcValue && this.props.lifeValue === nextProps.lifeValue){
			if (this.state != nextState){
				return true;
			}
			else {
				return false;
			}
		}
		return true;
	}

	componentDidUpdate(prevProps) {
		if (prevProps != this.props){
			this.setState(() => ({
				btcValue : parseFloat(this.props.btcValue) || 15000,
				lifeValue : parseFloat(this.props.lifeValue) * 100000000 || 1,
				lifeUnits : 100000,
				totalBtc : parseFloat(this.props.lifeValue) * 100000,
				totalUsd : parseFloat(this.props.btcValue) * parseFloat(this.props.lifeValue) * 100000
			}))
		}
	}

	btcValueChange(e){
		let btcValue = parseFloat(e.target.value) || 0;
		let totalUsd = btcValue * this.state.lifeUnits * this.state.lifeValue / 100000000;
		this.setState(() => ({
			btcValue, totalUsd
		}))
	}

	lifeUnitsChange(e){
		let lifeUnits = parseFloat(e.target.value) || 0;
		let totalUsd = this.state.btcValue * lifeUnits * this.state.lifeValue / 100000000;
		let totalBtc = this.state.lifeValue * lifeUnits / 100000000
		this.setState(() => ({
			lifeUnits, totalBtc, totalUsd
		}))
	}

	lifeValueChange(e){
		let lifeValue = parseFloat(e.target.value) || 0;
		let totalUsd = this.state.btcValue * this.state.lifeUnits * lifeValue / 100000000;
		let totalBtc = lifeValue * this.state.lifeUnits / 100000000
		this.setState(() => ({
			lifeValue, totalBtc, totalUsd
		}))
	}

	render() {
		return (
			<div className="widget widget_infos">
					<div className="widget__content">
						<div className="wigdet__title-name">General Informations</div>
						<div className="widget__infos__links">
						<div className="widget__infos__link"><a target="_blank" href="http://www.lifelabs.io">- Lifelabs Website</a></div>
								<div className="widget__infos__link"><a target="_blank" href="http://token.lifelabs.io">- Life Token Website</a></div>
								<div className="widget__infos__link"><a target="_blank" href="http://card.lifelabs.io">- Card pre-registration website</a></div>
								<div className="widget__infos__link"><a target="_blank" href="https://www.instagram.com/lifelabshq">LIFE Instagram</a></div>
								<div className="widget__infos__link"><a target="_blank" href="https://www.lifelabs.io/life-white-paper/">- Whitepaper</a></div>
								<div className="widget__infos__link"><a target="_blank" href="https://bitcointalk.org/index.php?topic=2196925">- Bitcoin Talk</a></div>
								<div className="widget__infos__link"><a target="_blank" href="https://etherscan.io/token/0xff18dbc487b4c2e3222d115952babfda8ba52f5f">- Explorer Etherscan</a></div>
						</div>
						<div className="wigdet__title-name">Value Simulator</div>
							<div className="widget__infos__simu">
								<div className="simu__entry">	BTC Price (USD) : <input onChange={this.btcValueChange} type="number" step="any" value={parseInt(this.state.btcValue)} /></div>
								<div className="simu__entry">	LIFE Price (sat BTC) : <input onChange={this.lifeValueChange} type="number" step="any" value={this.state.lifeValue.toFixed()} /></div>
								<div className="simu__entry">	LIFE you own  : <input onChange={this.lifeUnitsChange} type="number" step="any" value={this.state.lifeUnits} /></div>
								<div className="simu__entry">	Total BTC value : <div className="simu__result">฿ {this.state.totalBtc.toFixed(8)}</div></div>
								<div className="simu__entry">	Total USD Value : <div className="simu__result">$ {this.state.totalUsd.toFixed(2)}</div></div>
							</div>
					</div>
			</div>
			)	
	}
}
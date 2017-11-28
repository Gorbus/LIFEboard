import React from 'react';
import moment from 'moment';
export default (props) => {

	const renderLastTrades = (trades) => {
		let lastTrades = []
		let max = 10;
		if(trades.length < 10) {
			max = trades.length;
		}
		for (let i = 0; i < max; i++){
			trade = trades[i];
			tradeDiv = (
				<div key={trade.timestamp} className='trade'>
					<div className="trade__data trade__side">{trade.side}</div>
					<div className="trade__data trade__time">{moment(trade.timestamp).format('DD/MM/YYYY - HH:mm:ss')}</div>
					<div className="trade__data trade__price">{'฿ ' + parseFloat(trade.price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					<div className="trade__data trade__quantity">{parseFloat(trade.quantity).toLocaleString('en') + ' LIFE'}</div>
					<div className="trade__data trade__valuebtc">{'฿ ' +  (parseFloat(trade.quantity) * parseFloat(trade.price)).toLocaleString('en', {minimumFractionDigits: 8})}</div>
			
				</div>
				)
			lastTrades.push(tradeDiv)
		}
		return lastTrades;
	}

	const renderBid = (bids) => {
		let lastBids = [];
		let sum = 0;
		let max = 25;
		let id = 10;
		if(bids.length < 25) {
			max = bids.length;
		}
		for (let i = 0; i < max; i++){
			id = id + 1;
			bid = bids[i];
			sum = parseInt(sum) + parseInt(bid.Quantity);
			bidDiv = (
				<div key={`${bid.Price}${bid.Quantity}${bid.OrderTime}${id}`} className='one__bid'>
					<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
					<div className="ob__data ob__amount">{parseFloat(bid.Quantity).toLocaleString('en')}</div>
					<div className="ob__data ob__bid-value">{parseFloat(bid.Price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
				</div>
				)
			lastBids.push(bidDiv)
		}
		return lastBids;
	}

	const renderAsk = (asks) => {
		let lastAsks = [];
		let sum = 0;
		let max = 25;
		let id = 1000;
		if(asks.length < 25) {
			max = asks.length;
		}
		for (let i = 0; i < max; i++){
			ask = asks[i];
			id = id + 1;
			sum = parseInt(sum) + parseInt(ask.Quantity);
			askDiv = (
				<div key={`${ask.Price}${ask.Quantity}${bid.OrderTime}${id}`} className='one__ask'>
					<div className="ob__data ob__ask-value">{parseFloat(ask.Price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					<div className="ob__data ob__amount">{parseFloat(ask.Quantity).toLocaleString('en')}</div>
					<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
				</div>
				)
			lastAsks.push(askDiv)
		}
		return lastAsks;
	}

	if (props.CeData){
		let ticker = props.CeData[0].data.result;
		let orderBook = props.CeData[1].data.result; 
		return (
			<div className="widget widget__exchange">
				<div className="widget__title">
					<div className="wigdet__title-name">{props.title}</div>
					<div className="widget__title-updated">updated @ {moment(props.CeData[0].headers.date).format('HH:mm:ss')}</div>
				</div>
				<div className="widget__content widget__content__exchange">
					<div className='part1'>
						<div className='cmcData'>
							<div className='cmcData__title'>Last price (BTC):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.LastPrice).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Price 24h ago:</div>
							<div className='cmcData__info'>{'฿ ' + (parseFloat(ticker.LastPrice) + parseFloat(ticker.Change)).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Ask (BTC):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.AskPrice).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Bid (BTC):</div>
							<div className='cmcData__info'>{ticker.BidPrice ? '฿ ' + parseFloat(ticker.BidPrice).toLocaleString('en', {minimumFractionDigits: 8}) : "No bid"}</div>
						</div>
					</div>
					<div className='part2'>
						<div className='cmcData'>
							<div className='cmcData__title'>High (24h):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.HighPrice).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Low (24h):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.LowPrice).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (BTC):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.BTCVolume).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
					</div>
				</div>
				<div className="orders">
					<h3 className='last10'>Order Book</h3>
					<div className="order__book">
						<div className="ob__bid">
							<div className="one__bid">
								<div className="ob__title ob__data ob__sum">Sum</div>
								<div className="ob__title ob__data ob__amount">Amount</div>
								<div className="ob__title ob__data ob__bid-value">Bid</div>
							</div>
							{ renderBid(orderBook.BuyOrders) }
						</div>
						<div className="ob__ask">
							<div className="one__ask">
								<div className="ob__title ob__data ob__ask-value">Ask</div>
								<div className="ob__title ob__data ob__amount">Amount</div>
								<div className="ob__title ob__data ob__sum">Sum</div>
							</div>
							{ renderAsk(orderBook.SellOrders) }
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="widget">
				<div className="widget__title">{props.title}</div>
				<div className="widget__content">Loading...</div>
			</div>
		)
	}
}
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
				<div key={trade.timestamp + trade.quantity} className='trade'>
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
		let max = 10;
		if(bids.length < 10) {
			max = bids.length;
		}
		for (let i = 0; i < max; i++){
					bid = bids[i];
					sum = parseInt(sum) + parseInt(bid.size);
					bidDiv = (
						<div key={`${bid.price}${bid.size}`} className='one__bid'>
							<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
							<div className="ob__data ob__amount">{parseFloat(bid.size).toLocaleString('en')}</div>
							<div className="ob__data ob__bid-value">{parseFloat(bid.price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						)
					lastBids.push(bidDiv)
				}
			return lastBids;
	}

	const renderAsk = (asks) => {
		let lastAsks = [];
		let sum = 0;
		let max = 10;
		if(asks.length < 10) {
			max = asks.length;
		}
		for (let i = 0; i < max; i++){
					ask = asks[i];
					sum = parseInt(sum) + parseInt(ask.size);
					askDiv = (
						<div key={`${ask.price}${ask.size}`} className='one__ask'>
							<div className="ob__data ob__ask-value">{parseFloat(ask.price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
							<div className="ob__data ob__amount">{parseFloat(ask.size).toLocaleString('en')}</div>
							<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
						</div>
						)
					lastAsks.push(askDiv)
				}
			return lastAsks;
	}

	if (props.hitBtcData){
		let ticker = props.hitBtcData[0].data;
		let trades = props.hitBtcData[1].data;
		let orderBook = props.hitBtcData[2].data;
		return (
			<div className="widget widget__exchange">
				<div className="widget__title">
					<div className="wigdet__title-name">{props.title}</div>
					<div className="widget__title-updated">updated @ {moment(props.timestamp).format('HH:mm:ss')}</div>
				</div>
				<div className="widget__content widget__content__exchange">
					<div className='part1'>
						<div className='cmcData'>
							<div className='cmcData__title'>Last price (BTC):</div>
							<div className='cmcData__info exchange__last__price'>{'฿ ' + parseFloat(ticker.last).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Price 24h ago:</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.open).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Ask (BTC):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.ask).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Bid (BTC):</div>
							<div className='cmcData__info'>{ticker.bid ? '฿ ' + parseFloat(ticker.bid).toLocaleString('en', {minimumFractionDigits: 8}) : "No bid"}</div>
						</div>
					</div>
					<div className='part2'>
						<div className='cmcData'>
							<div className='cmcData__title'>High (24h):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.high).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Low (24h):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.low).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (LIFE):</div>
							<div className='cmcData__info'>{parseFloat(ticker.volume).toLocaleString('en') + ' LIFE'}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (BTC):</div>
							<div className='cmcData__info'>{'฿ ' + parseFloat(ticker.volumeQuote).toLocaleString('en', {minimumFractionDigits: 8})}</div>
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
							{ renderBid(orderBook.bid) }
						</div>
						<div className="ob__ask">
							<div className="one__ask">
								<div className="ob__title ob__data ob__ask-value">Ask</div>
								<div className="ob__title ob__data ob__amount">Amount</div>
								<div className="ob__title ob__data ob__sum">Sum</div>
							</div>
							{ renderAsk(orderBook.ask) }
						</div>
					</div>
				</div>
				<div className="trades">
					<h3 className='last10'>Last 10 trades</h3>
					<div className='trade'>
						<div className="trade__data trade__side trade__title">Side</div>
						<div className="trade__data trade__time trade__title">Time (UTC)</div>
						<div className="trade__data trade__price trade__title">Price</div>
						<div className="trade__data trade__quantity trade__title trade__quantity__title">Quantity</div>
						<div className="trade__data trade__valuebtc trade__title">Value</div>
					</div>
					{renderLastTrades(trades)}
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
import React from 'react';
import moment from 'moment';
export default (props) => {

	const renderLastTrades = (trades) => {
		let lastTrades = []
		let max = 20;
		if(trades.length < 20) {
			max = trades.length;
		}
		for (let i = 0; i < max; i++){
			trade = trades[i];
			tradeDiv = (
				<div key={`${trade.timestamp} + ${trade.amount}`} className='trade'>
					<div className="trade__data trade__side">{trade.type === "bid" ? "buy" : "sell"}</div>
					<div className="trade__data trade__time">{moment(trade.timestamp * 1000).format('DD/MM/YYYY - HH:mm:ss')}</div>
					<div className="trade__data trade__price">{'฿ ' + parseFloat(trade.price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					<div className="trade__data trade__quantity">{parseFloat(trade.amount).toLocaleString('en') + ' LIFE'}</div>
					<div className="trade__data trade__valuebtc">{'฿ ' +  (parseFloat(trade.amount) * parseFloat(trade.price)).toLocaleString('en', {minimumFractionDigits: 8})}</div>
			
				</div>
				)
			lastTrades.push(tradeDiv)
		}
		return lastTrades;
	}

	const renderBid = (bids) => {
		let lastBids = [];
		let sum = 0;
		let max = 15;
		let id = 10;
		if(bids.length < 15) {
			max = bids.length;
		}
		for (let i = 0; i < max; i++){
					bid = bids[i];
					id = id + 1
					sum = parseInt(sum) + parseInt(bid[0]);
					bidDiv = (
						<div key={`${bid[1]}${bid[0]}${id}`} className='one__bid'>
							<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
							<div className="ob__data ob__amount">{parseFloat(bid[0]).toLocaleString('en')}</div>
							<div className="ob__data ob__bid-value">{parseFloat(bid[1]).toLocaleString('en', {minimumFractionDigits: 8})}</div>
						</div>
						)
					lastBids.push(bidDiv)
				}
			return lastBids;
	}

	const renderAsk = (asks) => {
		let lastAsks = [];
		let sum = 0;
		let max = 15;
		let id = 1000;

		if(asks.length < 15) {
			max = asks.length;
		}
		for (let i = 0; i < max; i++){
					ask = asks[i];
					id = id + 1;
					sum = parseInt(sum) + parseInt(ask[1]);
					askDiv = (
						<div key={`${ask[1]}${ask[0]}${id}`} className='one__ask'>
							<div className="ob__data ob__ask-value">{parseFloat(ask[0]).toLocaleString('en', {minimumFractionDigits: 8})}</div>
							<div className="ob__data ob__amount">{parseFloat(ask[1]).toLocaleString('en')}</div>
							<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
						</div>
						)
					lastAsks.push(askDiv)
				}
			return lastAsks;
	}

	if (props.tidexData){
		console.log(props.tidexData);
		let ticker = props.tidexData[0].data.life_btc;
		let trades = props.tidexData[1].data.life_btc;
		let orderBook = props.tidexData[2].data.life_btc;
		return (
			<div className="widget widget__exchange">
				<div className="widget__title">
					<div className="wigdet__title-name">{props.title}</div>
					<div className="widget__title-updated">updated @ {ticker ? moment(ticker.updated * 1000).format('HH:mm:ss') : ''}</div>
				</div>
				<div className="widget__content widget__content__exchange">
					<div className='part1'>
						<div className='cmcData'>
							<div className='cmcData__title'>Last price (BTC):</div>
							<div className='cmcData__info exchange__last__price'>{ticker ? '฿ ' + parseFloat(ticker.last).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Average Price over 24h:</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.avg).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Ask (BTC):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.sell).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Bid (BTC):</div>
							<div className='cmcData__info'>{ticker ? (ticker.bid ? '฿ ' + parseFloat(ticker.buy).toLocaleString('en', {minimumFractionDigits: 8}) : "No bid") : ''}</div>
						</div>
					</div>
					<div className='part2'>
						<div className='cmcData'>
							<div className='cmcData__title'>High (24h):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.high).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Low (24h):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.low).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (LIFE):</div>
							<div className='cmcData__info'>{ticker ? parseFloat(ticker.vol_cur).toLocaleString('en') + ' LIFE' : ''}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (BTC):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.vol).toLocaleString('en', {minimumFractionDigits: 8}) : ''}</div>
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
							{ orderBook ? renderBid(orderBook.bids) : undefined }
						</div>
						<div className="ob__ask">
							<div className="one__ask">
								<div className="ob__title ob__data ob__ask-value">Ask</div>
								<div className="ob__title ob__data ob__amount">Amount</div>
								<div className="ob__title ob__data ob__sum">Sum</div>
							</div>
							{ orderBook ? renderAsk(orderBook.asks) : undefined }
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
				<div className="widget__content">Loading or Tidex API not available...</div>
			</div>
		)
	}
}
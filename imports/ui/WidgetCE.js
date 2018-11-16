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
		let max = 40;
		let id = 10;
		if(bids.length < 40) {
			max = bids.length;
		}
		for (let i = 0; i < max; i++){
			id = id + 1;
			bid = bids[i];
			if(bid){
				sum = parseInt(sum) + parseInt(bid.Quantity);
				bidDiv = (
					<div key={`${bid.Price}${bid.Quantity}${bid.OrderTime}${id}`} className='one__bid'>
						<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
						<div className="ob__data ob__amount">{parseFloat(bid.Quantity).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
						<div className="ob__data ob__bid-value">{parseFloat(bid.Price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					</div>
					)
				lastBids.push(bidDiv)
			}
		}
		return lastBids;
	}

	const renderAsk = (asks) => {
		let lastAsks = [];
		let sum = 0;
		let max = 40;
		let id = 1000;
		if(asks.length < 40) {
			max = asks.length;
		}
		for (let i = 0; i < max; i++){
			ask = asks[i];
			id = id + 1;
			sum = parseInt(sum) + parseInt(ask.Quantity);
			askDiv = (
				<div key={`${ask.Price}${ask.Quantity}${ask.OrderTime}${id}`} className='one__ask'>
					<div className="ob__data ob__ask-value">{parseFloat(ask.Price).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					<div className="ob__data ob__amount">{parseFloat(ask.Quantity).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
					<div className="ob__data ob__sum">{parseFloat(sum).toLocaleString('en')}</div>
				</div>
				)
			lastAsks.push(askDiv)
		}
		return lastAsks;
	}

	if (props.CeData){
		console.log(props.CeData);
		let ticker = props.CeData[0].data ? props.CeData[0].data.result : undefined;
		let orderBook = props.CeData[1].data ? props.CeData[1].data.result : undefined; 
		return (
			<div className="widget widget__exchange">
				<div className="widget__title">
					<div className="wigdet__title-name">{props.title}</div>
					<div className="widget__title-updated">updated @ {ticker ? moment(props.CeData[0].headers.date).format('HH:mm:ss') : undefined}</div>
				</div>
				<div className="widget__content widget__content__exchange">
					<div className='part1'>
						<div className='cmcData'>
							<div className='cmcData__title'>Last price (BTC):</div>
							<div className='cmcData__info exchange__last__price'>{ticker ? '฿ ' + parseFloat(ticker.LastPrice).toLocaleString('en', {minimumFractionDigits: 8}) : undefined}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Change 24h:</div>
							<div className='cmcData__info'>{ticker ? parseFloat(ticker.Change).toLocaleString('en', {minimumFractionDigits: 2}) + '%' : undefined}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Ask (BTC):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.AskPrice).toLocaleString('en', {minimumFractionDigits: 8}) : undefined}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Bid (BTC):</div>
							<div className='cmcData__info'>{ticker ? (ticker.BidPrice ? '฿ ' + parseFloat(ticker.BidPrice).toLocaleString('en', {minimumFractionDigits: 8}) : "No bid") : undefined}</div>
						</div>
					</div>
					<div className='part2'>
						<div className='cmcData'>
							<div className='cmcData__title'>High (24h):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.HighPrice).toLocaleString('en', {minimumFractionDigits: 8}) : undefined}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Low (24h):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.LowPrice).toLocaleString('en', {minimumFractionDigits: 8}) : undefined}</div>
						</div>
						<div className='cmcData'>
							<div className='cmcData__title'>Volume 24h (BTC):</div>
							<div className='cmcData__info'>{ticker ? '฿ ' + parseFloat(ticker.BTCVolume).toLocaleString('en', {minimumFractionDigits: 8}) : undefined}</div>
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
							{ props.CeData[1].data ? renderBid(orderBook.BuyOrders) : undefined}
						</div>
						<div className="ob__ask">
							<div className="one__ask">
								<div className="ob__title ob__data ob__ask-value">Ask</div>
								<div className="ob__title ob__data ob__amount">Amount</div>
								<div className="ob__title ob__data ob__sum">Sum</div>
							</div>
							{ props.CeData[1].data ? renderAsk(orderBook.SellOrders) : undefined }
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
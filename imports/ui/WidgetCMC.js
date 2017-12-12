import React from 'react';
import moment from 'moment';
export default (props) => {
	if (props.cmcData){
		let data = props.cmcData.data[0];
		return (
			<div className="widget widget_cmc">
				<div className="widget__title">
					<div className="wigdet__title-name">{props.title}</div>
					<div className="widget__title-updated">{moment(parseFloat(data.last_updated) * 1000).format('DD/MM/YYYY')}</div>
				</div>
				<div className="widget__content">
					<div className='cmcData cmcData__last__price'>
						<div className='cmcData__title'>Last price (BTC):</div>
						<div className='cmcData__info last__price__btc'>{'฿ ' + parseFloat(data.price_btc).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					</div>
					<div className='cmcData cmcData__last__price'>
						<div className='cmcData__title'>Market capitalization (USD):</div>
						<div className='cmcData__info last__price__btc'>{'$ ' + parseFloat(data.market_cap_usd).toLocaleString('en')}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Last price (USD):</div>
						<div className='cmcData__info'>{'$ ' + parseFloat(data.price_usd).toLocaleString('en', {minimumFractionDigits: 8})}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Market capitalization rank:</div>
						<div className='cmcData__info'>{data.rank}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>24h Volume (USD):</div>
						<div className='cmcData__info'>{'$ ' + parseFloat(data['24h_volume_usd']).toLocaleString('en', {minimumFractionDigits: 1})}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Percent change (1h):</div>
						<div className='cmcData__info'>{parseFloat(data.percent_change_1h).toLocaleString('en', {minimumFractionDigits: 2}) + '%'}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Percent change (24h):</div>
						<div className='cmcData__info'>{parseFloat(data.percent_change_24h).toLocaleString('en', {minimumFractionDigits: 2}) + '%'}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Percent change (7d):</div>
						<div className='cmcData__info'>{parseFloat(data.percent_change_7d).toLocaleString('en', {minimumFractionDigits: 2}) + '%'}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Circulating supply:</div>
						<div className='cmcData__info'>{parseFloat(data.available_supply).toLocaleString('en') + ' LIFE'}</div>
					</div>
					<div className='cmcData'>
						<div className='cmcData__title'>Total supply:</div>
						<div className='cmcData__info'>{parseFloat(data.max_supply).toLocaleString('en') + ' LIFE'}</div>
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
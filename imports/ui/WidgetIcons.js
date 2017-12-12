import React from 'react';
import moment from 'moment';
export default (props) => {

	return (
		<div className="widget widget_icons">
				<div className="widget__content">
					<img className="logo__life" src="/LIFE.jpg" alt=""/>
					<div className='logo__subtitle'>"Simply for everyday people..."</div>
					<div className="social__icons">
						<a target="_blank" href="https://t.me/joinchat/HFVijQ3hyhyQZa6LQCE-NQ"><img title="Telegram" src='/telegram.png' className='icons'/></a>
						<a target="_blank" href="https://t.me/LIFE_updates"><img title="Telegram Announcement Channel" src='/telegram.png' className='icons'/></a>
						<a target="_blank" href="https://twitter.com/LIFEtoken_"><img title="Twitter" src='/twitter.png' className='icons'/></a>
						<a target="_blank" href="https://www.facebook.com/LIFEtoken.ForEverydayPeople/"><img title="Facebook" src='/facebook.png' className='icons'/></a>
					</div>
				</div>
		</div>
		)
}

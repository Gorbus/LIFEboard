import React from 'react';
import moment from 'moment';
export default (props) => {

	return (
		<div className="widget widget_infos">
				<div className="widget__title">
					<div className="wigdet__title-name">General Informations</div>
				</div>
				<div className="widget__content">
					<ul>
						<li><a target="_blank" href="http://www.lifelabs.io">Lifelabs Website</a></li>
						<li><a target="_blank" href="http://token.lifelabs.io">Life Token Website</a></li>
						<li><a target="_blank" href="http://card.lifelabs.io">Card pre-registration website</a></li>
						<li><a target="_blank" href="https://www.lifelabs.io/life-white-paper/">Whitepaper</a></li>
						<li><a target="_blank" href="https://bitcointalk.org/index.php?topic=2196925">Bitcoin Talk</a></li>
						<li><a target="_blank" href="https://etherscan.io/token/0xff18dbc487b4c2e3222d115952babfda8ba52f5f">Explorer Etherscan</a></li>
					</ul>
				</div>
		</div>
		)
}
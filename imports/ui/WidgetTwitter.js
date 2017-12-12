import React from 'react';
import moment from 'moment';
import { Timeline } from 'react-twitter-widgets'

export default (props) => {
	return (
		<div className="widget-twitter">
			<div className="widget__title">
				<div className="wigdet__title-name">Twitter</div>
			</div>
			<div className="widget__content__twitter">
			  <Timeline
			    dataSource={{
			      sourceType: 'profile',
			      screenName: 'LIFEtoken_'
			    }}
			    options={{
			      username: 'LIFEtoken_',
			      height: '415',
			      chrome: 'nofooter noscrollbar noheader'
			    }}
			    onLoad={() => console.log('Timeline is loaded!')}
			  />
			</div>
		</div>
		)
}


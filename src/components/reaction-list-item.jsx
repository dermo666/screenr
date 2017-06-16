import React from 'react';
import moment from 'moment';

const ReactionListItem = ({reaction, reactionType}) => {
	let duration = moment.utc(reaction.time * 1000).format("HH:mm:ss");

	return (
		<li className="list-group-item">
			<div className="reaction-list media">
				<div className="media-left">
					<img src={reactionType.src} />
				</div>
				<div className="media-left">
					<div className="">{duration}</div>
				</div>
				<div className="media-body">
					<div className="">{reaction.reviewText}</div>
				</div>
			</div>
		</li>
	);
};

export default ReactionListItem;

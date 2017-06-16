import React from 'react';

const ReactionListItem = ({reaction, reactionType}) => {
	return (
		<li className="list-group-item">
			<div className="reaction-list media">
				<div className="media-left">
					<img src={reactionType.src} />
				</div>
				<div className="media-left">
					<div className="">{reaction.time.toFixed(2)}</div>
				</div>
				<div className="media-body">
					<div className="">{reaction.reviewText}</div>
				</div>
			</div>
		</li>
	);
};

export default ReactionListItem;

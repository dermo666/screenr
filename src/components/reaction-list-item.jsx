import React from 'react';

const ReactionListItem = ({reaction}) => {
	let src = '';

	switch (reaction.reactionType) {
		case 'like':
			src = '/img/1f603.png';
			break;
		case 'dislike':
			src = '/img/2639.png';
			break;
		case 'love':
			src = '/img/1f60d.png';
			break;
		case 'disappointed':
			src = '/img/1f61e.png';
			break;
		case 'shocked':
			src = '/img/1f632.png';
			break;
		case 'crying':
			src = '/img/1f62d.png';
			break;
		case 'boring':
			src = '/img/1f634.png';
			break;
	}

	return (
		<li className="list-group-item">
			<div className="reaction-list media">
				<div className="media-left">
					<img src={src} />
				</div>
				<div className="media-body">
					<div className="media-heading">{reaction.time}</div>
				</div>
			</div>
		</li>
	);
};

export default ReactionListItem;

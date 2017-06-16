import React from 'react';

const VideoReactionItem = ({reactionName, reactionType, onIconClick}) => {
	return (
		<div>
			<img onClick={() => { onIconClick(reactionName) }} src={reactionType.src} />
			<span>{reactionType.title}</span>
		</div>
	);
};

export default VideoReactionItem;

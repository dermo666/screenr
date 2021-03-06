import React from 'react';
import ReactionListItem from './reaction-list-item';

const ReactionList = (props) => {
	const reactionItems = props.reactions.map((reaction, index) => {
		return (
			<ReactionListItem key={index}
			reaction={reaction} reactionType={props.reactionTypes[reaction.reactionName]} />
		);
	});

	return (
		<div className="row">
			<ul className="col-md-12">
				{reactionItems}
			</ul>
		</div>
	);
};

export default ReactionList;

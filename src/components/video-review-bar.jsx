import React, { Component } from 'react';
import VideoReactionItem from './video-reaction-item';


class VideoReviewBar extends Component {
	constructor(props) {
		super(props)

		this.onIconClick = this.onIconClick.bind(this);
	}

	onIconClick(reactionName) {
		let reaction = {
			reactionName: reactionName,
			time: this.props.videoPlayer.currentTime()
		};

		this.props.onReaction(reaction);
	}

	render() {
		const videoReactionItems = Object.keys(this.props.reactionTypes).map((reactionName) => {
			return (
				<VideoReactionItem key={reactionName}
					reactionName={reactionName}
					reactionType={this.props.reactionTypes[reactionName]}
					onIconClick={this.onIconClick} />
			);
		});

		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
				{!this.props.videoPlayer && <div>Loading...</div>}
				{this.props.videoPlayer &&
					<div className="review-items">
						{videoReactionItems}
					</div>
				}
				</div>
			</div>
		)
	}
}

export default VideoReviewBar;

import React, { Component } from 'react';
import VideoReactionItem from './video-reaction-item';
import VideoReactionText from './video-reaction-text';


class VideoReviewBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showComponent: false,
			reaction: {}
		};

		this.onIconClick = this.onIconClick.bind(this);
		this.onSubmitClick = this.onSubmitClick.bind(this);
	}

	onIconClick(reactionName) {
		this.setState({
			reaction: {
				reactionName: reactionName,
				time: this.props.videoPlayer.currentTime()
			},
			showComponent: true
		});
	}

	onSubmitClick(reviewText) {
		console.log(reviewText);
		let reaction = Object.assign({}, this.state.reaction);
		reaction.reviewText = reviewText;

		this.props.onReaction(reaction);

		this.setState({ showComponent:false, reaction: {} });
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
				{!this.props.videoPlayer && <div>Loading...</div>}
				{this.props.videoPlayer &&
					<div className="col-md-8 col-md-offset-2 video-rewiew-bar">
						<div className="video-review-items">
							{videoReactionItems}
						</div>
						{this.state.showComponent &&
							<VideoReactionText onSubmitClick={this.onSubmitClick}
								reaction={this.props.reactionTypes[this.state.reaction.reactionName]}/>
						}
					</div>
				}
			</div>
		)
	}
}

export default VideoReviewBar;

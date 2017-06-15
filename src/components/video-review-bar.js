import React, { Component } from 'react';

class VideoReviewBar extends Component {
	constructor(props) {
		super(props)
	}

	onIconClick(reactionType) {
		let reaction = {
			reactionType: reactionType,
			time: this.props.videoPlayer.currentTime()
		};

		this.props.onReaction(reaction);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
				{!this.props.videoPlayer && <div>Loading...</div>}
				{this.props.videoPlayer &&
					<div className="row">
						<div className="col-md-6  text-center">
							<i onClick={() => { this.onIconClick('thumbs-up') }} className="fa fa-thumbs-o-up fa-4x" aria-hidden="true"></i>
						</div>
						<div className="col-md-6">
							<i onClick={() => { this.onIconClick('thumbs-down') }} className="fa fa-thumbs-o-down fa-4x center-block" aria-hidden="true"></i>
						</div>
					</div>
				}
				</div>
			</div>
		)
	}
}

export default VideoReviewBar;

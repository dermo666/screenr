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
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('like') }} src="/img/1f603.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('dislike') }} src="/img/2639.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('love') }} src="/img/1f60d.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('disappointed') }} src="/img/1f61e.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('shocked') }} src="/img/1f632.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('crying') }} src="/img/1f62d.png" />
						</div>
						<div className="col-md-1">
							<img onClick={() => { this.onIconClick('boring') }} src="/img/1f634.png" />
						</div>
					</div>
				}
				</div>
			</div>
		)
	}
}

export default VideoReviewBar;

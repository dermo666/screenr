import React, { Component } from 'react';

class VideoReactionText extends Component {
	constructor(props) {
		super(props);

		this.state = {
			reviewText: ''
		};
	}

	render() {
		return (
			<div className="video-review-text-area-wrapper bg-faded">
				<img src={this.props.reaction.src} />
				<textarea value={this.state.reviewText} onChange={event => this.onInputChange(event.target.value)}></textarea>
				<button onClick={() => this.props.onSubmitClick(this.state.reviewText)}>Submit</button>
			</div>
		);
	}

	onInputChange(reviewText) {
		this.setState({reviewText});
	}
}

export default VideoReactionText;

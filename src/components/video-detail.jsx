import React, { Component } from 'react';

class VideoDetail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Inject video player javascript on the page from Brightcove
		let playerJS = document.createElement('script');
		playerJS.src = '//players.brightcove.net/' + this.props.accountId + '/default_default/index.min.js';
		document.body.appendChild(playerJS);

		playerJS.onreadystatechange = playerJS.onload = this.onScriptLoad.bind(this);
	}

	onScriptLoad() {
		let videoJS = videojs('player');
		this.props.onVideoLoad(videoJS);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<video id="player"
						data-video-id={this.props.videoId}
						data-account={this.props.accountId}
						data-player="default"
						data-embed="default"
						className="video-js video-player"
						controls>
					</video>
				</div>
			</div>
		)
	}
}

export default VideoDetail;

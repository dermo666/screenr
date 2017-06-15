import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import VideoDetail from './components/video-detail';
import VideoReviewBar from './components/video-review-bar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoPlayer: null,
			reactions: []
		};

		this.onReactionAdd = this.onReactionAdd.bind(this);
	}

	onReactionAdd(reaction) {
		console.log(reaction);
		this.setState({reactions: [...this.state.reactions, reaction]});
	}

	render() {
		return (
			<div>
				<VideoDetail videoId={5471897138001} accountId={5392214260001}
					onVideoLoad={videoPlayer => this.setState({videoPlayer}) }/>
				<VideoReviewBar videoPlayer={this.state.videoPlayer} onReaction={this.onReactionAdd}/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('.container')
);

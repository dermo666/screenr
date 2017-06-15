import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import VideoDetail from './components/video-detail.jsx';
import VideoReviewBar from './components/video-review-bar.jsx';
import ReactionList from './components/reaction-list.jsx';

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
				<ReactionList reactions={this.state.reactions} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('.container')
);

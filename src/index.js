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

		this.reactionTypes = {
			like: {
				src: '/img/1f603.png',
				title: 'Like'
			},
			love: {
				src: '/img/1f60d.png',
				title: 'Love'
			},
			boring: {
				src: '/img/1f634.png',
				title: 'Boring'
			},
			shocked: {
				src: '/img/1f632.png',
				title: 'Shocked'
			},
			crying: {
				src: '/img/1f62d.png',
				title: 'Crying'
			},
			dislike: {
				src: '/img/2639.png',
				title: 'Dislike'
			},
			disappointed: {
				src: '/img/1f61e.png',
				title: 'Disappointed'
			}
		}
	}

	onReactionAdd(reaction) {
		console.log(reaction);
		this.setState({reactions: [...this.state.reactions, reaction]});
	}

	render() {
		return (
			<div>
				<VideoDetail videoId={5471855135001} accountId={5392214260001}
					onVideoLoad={videoPlayer => this.setState({videoPlayer}) }/>
				<VideoReviewBar videoPlayer={this.state.videoPlayer}
					onReaction={this.onReactionAdd} reactionTypes={this.reactionTypes}/>
				<ReactionList reactions={this.state.reactions} reactionTypes={this.reactionTypes}/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('.main-content')
);

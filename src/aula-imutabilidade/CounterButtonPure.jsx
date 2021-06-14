import React, { useState } from 'react';

class CounterButtonPure extends React.PureComponent = {
	constructor(props) {
		super(props);
		this.state = { count: 1 };
	}

	render() {
		return (
			<button
				color={this.props.color}
				onClick={() => this.setState(state => ({ count: count + 1 }))}
			>
				Count: {this.state.count}
			</button>
		);
	}
}
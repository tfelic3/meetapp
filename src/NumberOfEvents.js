import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 3,
	};

	changeInput = (eventCount) => {
		const value = eventCount.target.value;
		this.setState({ numberOfEvents: value });
		this.props.updateEvents(null, value);

		if (value < 1 || value > 3) {
			this.setState({
				infoText: 'Select number of events from 1 to 3',
			});
		} else {
			this.setState({
				infoText: '',
			});
		}
	};

	render() {
		return (
			<div className="numberOfEvents">
				<label>Number of Events:</label>
				<input
					type="number"
					id="numberOfEvents input"
					value={this.state.numberOfEvents}
					onChange={this.changeInput}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;

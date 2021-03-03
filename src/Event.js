import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false,
	};

	detailButtonClicked = () => {
		this.setState((prevState) => ({
			showDetails: !prevState.showDetails,
		}));
	};

	render() {
		const event = this.props.event;
		return (
			<div className="event">
				<p className="time">
					{event.start.dateTime} - {event.end.dateTime}
				</p>
				<p className="summary">{event.summary}</p>
				{this.state.showDetails && (
					<div className="extraDetails">
						<p className="location">{event.location}</p>
						<p className="description">{event.description}</p>
						<a className="htmlLink" href={event.htmlLink}>
							Event Link
						</a>
					</div>
				)}
				<button
					className="details-button"
					onClick={this.onDetailsButtonClicked}
				>
					Details
				</button>
			</div>
		);
	}
}

export default Event;

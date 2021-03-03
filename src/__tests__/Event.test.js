import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});

	beforeEach(() => {
		EventWrapper.setState({ showDetails: false });
	});

	test('render information for event', () => {
		expect(EventWrapper.find('.event')).toHaveLength(1);

		expect(EventWrapper.find('.summary')).toHaveLength(1);
	});

	test('clicking on button should expand event details', () => {
		EventWrapper.find('.details-button').simulate('click');
		expect(EventWrapper.find('.extraDetails')).toHaveLength(0);
	});
});

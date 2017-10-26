import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoursquareSearch from '../src/javascripts/components/map/foursquareSearch/foursquareSearch';

it('should search venues based on the value in the state', () => {
    const component = mount(<FoursquareSearch searchVenues={() => {}}/>);
    const preventDefault = jest.fn();
    component.setState({
      term:'bar'
    });
    component.find('form').simulate('submit', { preventDefault });
    expect(toJson(component)).toMatchSnapshot();
    expect(preventDefault).toBeCalled();
});


it('should pass a selected value to the onChange function', () => {
    const component = mount(<FoursquareSearch />);
    component.find('input').simulate('change', { target: {
      value: 'Change function' }
    });

    expect(toJson(component)).toMatchSnapshot();
});

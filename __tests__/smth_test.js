import React from 'react';
import QueriesList from '../src/javascripts/components/queriesList/queriesList';
import Header from '../src/javascripts/components/home/header';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoursquareSearch from '../src/javascripts/components/map/foursquareSearch/foursquareSearch';

it('should search an item based on the value in the state', () => {
    const component = mount(<FoursquareSearch searchVenues={() => {}}/>);
    const preventDefault = jest.fn();
    component.setState({
      term:'bla'
    });
    component.find('form').simulate('submit', { preventDefault });
    expect(toJson(component)).toMatchSnapshot();
    expect(preventDefault).toBeCalled();
  });

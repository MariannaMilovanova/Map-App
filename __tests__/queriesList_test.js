import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import QueriesList from '../src/javascripts/components/queriesList/queriesList';

const items = [{id: "59f1bb3e351e3d0c4b8a1d8f", term: "bar", center: {lat: 35.6895, lng: 139.69169999999997}, radius: 3660, date: new Date(2017,10,2)},
  {id: "59f1bb3e351e3d0c4b8a1d82", term: "cinema", center: {lat: 35.6895, lng: 139.69169999999997}, radius: 3660, date: new Date(2017,10,2)}];

it('should match its snapshot with query items', () => {
  const list = toJson(mount(<QueriesList searchHistory={items} />));

  expect(list).toMatchSnapshot();
});

it('img should have onClick function', () => {
    const component = mount(<QueriesList searchHistory={[items[0]]} deleteQuery={()=>{}}/>);
    component.find('img').simulate('click', { target: {
      value: 'Click function' }
    });
    expect(toJson(component)).toMatchSnapshot();
});

it('img onClick function should delete item', () => {
    const deleteQuery = jest.fn();
    const component = mount(<QueriesList searchHistory={[items[0]]} deleteQuery={deleteQuery}/>);
    component.find('img').simulate('click', { target: {
      value: 'Click function' }
    });
    expect(deleteQuery).toBeCalledWith(items[0].id);
});


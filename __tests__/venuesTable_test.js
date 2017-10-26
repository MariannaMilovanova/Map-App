import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import VenuesList from '../src/javascripts/components/venuesList/venuesList';

it('should match its snapshot with venues found', () => {
  const venues = [
    {id: "4b0587a0f964a5204a9d22e3", name: "New York Bar (ニューヨークバー)", location:{address: "西新宿1-13-7", lat: 35.68943390510903, lng: 139.69629496770423}, categories:[], verified: true},
    {id: "51d56c11498efa52e2de492a", name: "Bar Benfiddich", location: {address: "西新宿3-7-1-2", crossStreet: "パークハイアット東京 52F", lat: 35.68521128234544, lng: 139.69108508173935}, categories:[], labeledLatLngs: []}
];

  const list = toJson(mount(<VenuesList venues={venues} />));
  expect(list).toMatchSnapshot();
});
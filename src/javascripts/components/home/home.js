import React from 'react';
import MapComponent from '../map/map';
import Login from '../login/login';
import UserData from '../login/userData';
import VenuesList from '../venuesList/venuesList';
import { searchVenues } from './homeActions';
import { connect } from 'react-redux';
import './home.scss';

const HomePage = (props) => (
    <div className="home-page-wrapper">
        <div className="user">
            <UserData/>
            <Login/>
        </div>
        <div className="map-wrapper">
            <MapComponent searchVenues={props.searchVenues} venues={props.venues}/>
            <VenuesList venues={props.venues}/>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return ({
        venues: state.homeReducer.venues
    });
};

const mapDispatchToProps = {
   searchVenues
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);



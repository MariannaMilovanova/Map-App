import React from 'react';
import MapComponent from '../map/map';
import Login from '../login/login';
import UserData from '../login/userData';
import VenuesList from '../venuesList/venuesList';
import Header from './header';
import QueriesList from '../queriesList/queriesList'
import { searchVenues, deleteQuery } from './homeActions';
import { connect } from 'react-redux';
import './home.scss';

const HomePage = (props) => (
    <div className="home-page-wrapper">
        <Header/>
        <div className="user">
            <UserData/>
            <Login/>
        </div>
        <QueriesList searchHistory={props.searchHistory} deleteQuery={props.deleteQuery}/>
        <div className="map-wrapper">
            <MapComponent searchVenues={props.searchVenues} venues={props.venues}/>
            <VenuesList venues={props.venues}/>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return ({
        venues: state.homeReducer.venues,
        searchHistory: state.homeReducer.searchHistory
    });
};

const mapDispatchToProps = {
   searchVenues,
   deleteQuery
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);



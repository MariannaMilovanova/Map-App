import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import {CSVLink} from 'react-csv';

const ExportCSV = (props) => {
    let data = props.venues.map((venue) => {
        return {
            Name: venue.name,
            City: venue.location.city ? `${venue.location.city}, ${venue.location.country}` : `${venue.location.country}`,
            StreetAddress: venue.location.address,
            Latitude: venue.location.lat,
            Longitude: venue.location.lng
        };
    });
    return (
        <div className='download-csv'>
            <CSVLink filename={"my-file.csv"} data={data} separator={";"}>
                <Icon link name='download' size='large'/>
                <span className='item__span'>Export to CSV</span>
            </CSVLink>
        </div>
    );

};

ExportCSV.propTypes = {
    venues: PropTypes.array.isRequired
};

export default ExportCSV;
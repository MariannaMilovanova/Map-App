import axios from 'axios';

const FSQ_CLIENT_ID = process.env.FSQ_CLIENT_ID;
const FSQ_SECRET = process.env.FSQ_SECRET;

export const searchVenues = (term, center, radius) => {
    const ROOT_URL ='https://api.foursquare.com/v2/venues/search';
    const CLIENT_ID =`client_id=${FSQ_CLIENT_ID}`;
    const CLIENT_SECRET =`client_secret=${FSQ_SECRET}`;
    const CENTER = `ll=${center.lat},${center.lng}`;
    const RADIUS = `radius=${radius}`;
    const QUERY = `query=${term}`;
    const VERSION = `v=20171022`;
    const M = `m=foursquare`;

    const request = axios.get(`${ROOT_URL}/?${CLIENT_ID}&${CLIENT_SECRET}&${CENTER}&${RADIUS}&${QUERY}&${VERSION}&${M}`);
    return {
        type: 'SEARCH_VENUES',
        payload: request,
        meta: { term, center, radius }
    };
};

export const deleteQuery = (id) => {
    return {
        type: 'DELETE_SEARCH_QUERY_FROM_HISTORY',
        id
    };
};

export function userLogin(data) {
    return {
        type: 'LOGIN_GET_USER_DATA',
        data
    };
}

export function userLogout() {
    return {
        type: 'LOG_OUT'
    };
}

import axios from 'axios';
import { FSQ_CLIENT_ID, FSQ_SECRET } from '../../../../config/apiKeys';

export const searchVenues = (term, center) => {
    const ROOT_URL ='https://api.foursquare.com/v2/venues/search';
    const CLIENT_ID =`client_id=${FSQ_CLIENT_ID}`;
    const CLIENT_SECRET =`client_secret=${FSQ_SECRET}`;
    const CENTER = `ll=${center.lat},${center.lng}`;
    const QUERY = `query=${term}`;
    const VERSION = `v=20171022`;
    const M = `m=foursquare`;

    const request = axios.get(`${ROOT_URL}/?${CLIENT_ID}&${CLIENT_SECRET}&${CENTER}&${QUERY}&${VERSION}&${M}`);
    return {
        type: 'SEARCH_VENUES',
        payload: request
    };
}
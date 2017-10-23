import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import homeReducer from '../components/home/homeReducer';

export default combineReducers({
    routing,
    homeReducer
});

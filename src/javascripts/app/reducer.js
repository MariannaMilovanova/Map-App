import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import login from '../components/login/loginReducer';
import homeReducer from '../components/home/homeReducer';

export default combineReducers({
    routing,
    login,
    homeReducer
});

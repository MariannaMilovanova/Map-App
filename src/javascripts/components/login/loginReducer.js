const initState = {};

function login(state = initState, action) {
    switch (action.type) {
    case 'LOGIN_GET_USER_DATA': 
        return {...state, ...{user: action.data}};
     case 'LOG_OUT': 
        return {...state, ...{user: null}};
    default:
        return state;
    }
}

export default login;
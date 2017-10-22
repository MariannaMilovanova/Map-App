const initState = {
    venues:[]
};

function homeReducer(state = initState, action) {
    switch (action.type) {
    case 'SEARCH_VENUES': {
        return {...state, ...{venues: action.payload.data.response.venues}};
    }
    default:
        return state;
    }
}

export default homeReducer;
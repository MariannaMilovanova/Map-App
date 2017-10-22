const initState = {
    venues:[],
    searchHistory:[]
};

function homeReducer(state = initState, action) {
    switch (action.type) {
    case 'SEARCH_VENUES': {
        let searchHistoryItem = {};
        searchHistoryItem.id = action.payload.data.meta.requestId;
        searchHistoryItem.term = action.meta.term;
        searchHistoryItem.center = action.meta.center;
        searchHistoryItem.radius = action.meta.radius;
        searchHistoryItem.date = new Date();
        return {...state, ...{venues: action.payload.data.response.venues}, 
                ...{searchHistory: state.searchHistory.concat(searchHistoryItem)}};
    }
    case 'DELETE_SEARCH_QUERY_FROM_HISTORY': {
        return {...state,
                ...{searchHistory: state.searchHistory.filter(item => item.id !== action.id)}};
    }

    default:
        return state;
    }
}

export default homeReducer;
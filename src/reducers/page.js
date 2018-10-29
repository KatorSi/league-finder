import {
    GET_LEAGUE_REQUEST,
    GET_LEAGUE_SUCCESS,
    GET_LEAGUE_FAIL,
    SET_GAME,
    SET_LEAGUE,
    CHANGE_CURRENT_LEAGUE,
    FILL_LEAGUES,
    CLEAR_LEAGUES,
} from '../actions/PageActions';

// state потом разделится на game- и league- редьюсеры
const initialState = {
    game: 'Dota 2',
    currentLeague: '',
    leagues: [],
    isFetching: false,
    error: '',
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEAGUE_REQUEST:
            return { ...state, isFetching: true };
        case GET_LEAGUE_SUCCESS:
            return { ...state, league: action.payload, isFetching: false };
        case GET_LEAGUE_FAIL:
            return { ...state, isFetching: false, error: action.payload };
        case SET_GAME:
            return { ...state, game: action.payload };
        case SET_LEAGUE:
            return { ...state, league: action.payload };
        case CHANGE_CURRENT_LEAGUE:
            return { ...state, currentLeague: action.payload };
        case FILL_LEAGUES:
            return { ...state, leagues: action.payload };
        case CLEAR_LEAGUES:
            return { ...state, leagues: [] };
        default:
            return state;
    }
};

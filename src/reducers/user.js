import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
} from '../actions/UserActions';

const GUEST = 'Гость';

const initialState = {
    name: 'Гость',
    isFetching: false,
    error: '',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: action.payload };
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, isFetching: false, name: action.payload };
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                name: GUEST,
            };
        default:
            return state;
    }
};

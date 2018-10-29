export const SET_GAME = 'SET_GAME';
export const SET_LEAGUE = 'SET_LEAGUE';
export const GET_LEAGUE_REQUEST = 'GET_LEAGUE_REQUEST';
export const GET_LEAGUE_SUCCESS = 'GET_LEAGUE_SUCCESS';
export const GET_LEAGUE_FAIL = 'GET_LEAGUE_FAIL';
export const CHANGE_CURRENT_LEAGUE = 'CHANGE_CURRENT_LEAGUE';
export const FILL_LEAGUES = 'FILL_LEAGUES';
export const CLEAR_LEAGUES = 'CLEAR_LEAGUES';

export const getLeague = league => {
    return dispatch => {
        dispatch({
            type: CHANGE_CURRENT_LEAGUE,
            payload: league,
        });
    };
};

export const setGame = game => {
    return {
        type: SET_GAME,
        payload: game,
    };
};

export const changeLeague = league => {
    return dispatch => {
        fetch('http://leaguefinder/leagues', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: league,
            }),
        })
            .then(leagues => {
                //console.log(leagues.json());
                return leagues.json();
            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: FILL_LEAGUES,
                    payload: data,
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_LEAGUE_FAIL,
                    payload: error.message,
                });
            });
    };
};

export const clearLeagues = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_LEAGUES,
        });
    };
};

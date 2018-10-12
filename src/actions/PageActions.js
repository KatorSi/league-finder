export const SET_GAME = 'SET_GAME';
export const SET_LEAGUE = 'SET_LEAGUE';
export const GET_LEAGUE_REQUEST = 'GET_LEAGUE_REQUEST';
export const GET_LEAGUE_SUCCESS = 'GET_LEAGUE_SUCCESS';
export const GET_LEAGUE_FAIL = 'GET_LEAGUE_FAIL';

export const getLeague = league => {
    return dispatch => {
        dispatch({
            type: GET_LEAGUE_REQUEST,
            payload: league,
        });
        fetch(
            'http://leaguefinder',
            {
                method: 'POST',
                mode: 'cors',
            }
            //'https://api.opendota.com/api/explorer?sql=SELECT match_id FROM matches WHERE leagueid=4918'
        ) //fetch('https://api.opendota.com/api/leagues')
            .then(response => {
                return response.json();
            })
            .then(data => {
                /* const leagues = data.reduce((findLeague, currentLeague) => {
                    if (currentLeague.name === league) {
                        findLeague = currentLeague;
                    }
                    return findLeague;
                });
                console.log(leagues); */
                console.log(data);
                return data; //leagues;
            })
            .then(result => {
                dispatch({
                    type: GET_LEAGUE_SUCCESS,
                    payload: result,
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

export const setGame = game => {
    return {
        type: SET_GAME,
        payload: game,
    };
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL';

export const login = pass => {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });

        setTimeout(() => {
            // TODO:
            // сделать запрос к бэку
            try {
                const name = getName(pass);
                dispatch({
                    type: LOGIN_REQUEST_SUCCESS,
                    payload: name,
                });
            } catch (err) {
                dispatch({
                    type: LOGIN_REQUEST_FAIL,
                    payload: err.name + '; ' + err.message,
                });
            }
        }, 1000);
    };
};

const getName = pass => {
    return 'Test Name';
};

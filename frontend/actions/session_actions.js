import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => {

  return ({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = user => dispatch => (
  SessionAPI.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => {

  return SessionAPI.logout()
    .then(() => dispatch({ type: LOGOUT_CURRENT_USER }));
};

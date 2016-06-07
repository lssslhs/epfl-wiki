import * as types from './actionTypes';
import userAuth from '../api/userAuth';

export function SignInSuccess(user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    user
  };
}

export function RegistrationFailed(error) {
  //do nothing for now
}

export function SignIn(user) {
  return (dispatch, getState) => {
    return userAuth.signIn(user)
      .then(user =>{
        dispatch(SignInSuccess(user));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function Registration(user) {
  return (dispatch, getState) => {
    return userAuth.registration(user)
      .then(user => {
        dispatch(SignInSuccess(user));
      })
      .catch(error => {
        throw(error);
      });
  };
}

import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function authReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let user = action.user;
      user.isLogin = true; //for now fake login
      return user;
    }

    default:
      return state;
  }
}

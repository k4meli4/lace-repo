import axios from 'axios';
import { FETCH_USER } from './types';

// Can remove curly braces and return keyword if one term inside
// Refactored to Async Await

// export function changeAuth(isLoggedIn){
//   return{
//     type: CHANGE_AUTH,
//     payload: isLoggedIn
//   };
// }

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

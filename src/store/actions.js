import { CHANGE_USERS } from './types';

export function changeUsers(users) {
  return {
    type: CHANGE_USERS,
    payload: users,
  };
}

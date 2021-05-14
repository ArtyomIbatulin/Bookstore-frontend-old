import { createSelector } from 'reselect';

const getUsers = (state) => state.users;

export const filteredData = createSelector([getUsers], (users) => {
  return users;
});

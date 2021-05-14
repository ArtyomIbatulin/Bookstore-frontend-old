import { CHANGE_USERS } from './types';

const initialState = {
  users: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

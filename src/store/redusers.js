import { books } from "../db";
import { CHANGE_USERS, CHANGE_BOOKS_ARRAY } from "./types";

const initialState = {
  users: "",
  books: books,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERS:
      return { ...state, users: action.payload };

    case CHANGE_BOOKS_ARRAY:
      return { ...state, books: action.payload };

    default:
      return state;
  }
};

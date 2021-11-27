import { CHANGE_USERS, CHANGE_BOOKS_ARRAY } from "./types";

export function changeUsers(users) {
  return {
    type: CHANGE_USERS,
    payload: users,
  };
}

export function changeBooksArray(books) {
  return {
    type: CHANGE_BOOKS_ARRAY,
    payload: books,
  };
}

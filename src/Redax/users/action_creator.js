import * as types from "./actions";
export const isLoading = () => ({ type: types.LOADING_USER });
export const isError = (payload) => ({ type: types.LOADING_ERROR, payload });
export const fetchUsers = (payload) => ({
  type: types.FETCH_USERS,
  payload,
});

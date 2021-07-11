import { fetchHttp } from "../users/operations";
import { processSave, saveEditUser } from "./action_creator";
import { fetchUsers } from "../users/action_creator";

export const saveEditUsers = (id, data) => {
  return async (dispatch) => {
    try {
      await fetchHttp(`/user/${id}`, "put", data);
      dispatch(processSave());
      dispatch(fetchUsers(await fetchHttp("/users")));
      dispatch(saveEditUser());
    } catch (error) {
      throw error.message;
    }
  };
};
export const removeUsers = (id) => {
  return async (dispatch) => {
    try {
      await fetchHttp(`/user/${id}`, "delete");
      dispatch(fetchUsers(await fetchHttp("/users")));
    } catch (error) {
      throw error.message;
    }
  };
};
export const createNewUsers = (data) => {
  return async (dispatch) => {
    try {
      await fetchHttp(`/users`, "post", data);
      dispatch(fetchUsers(await fetchHttp("/users")));
      dispatch(saveEditUser());
    } catch (error) {
      throw error;
    }
  };
};

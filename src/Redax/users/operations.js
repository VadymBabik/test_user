import axios from "axios";
import { fetchUsers, isError, isLoading } from "./action_creator";

export const fetchHttp = async (url = "", method = "get", body = {}) =>
  await axios({
    method,
    url: `http://77.120.241.80:8811/api${url}`,
    data: body,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

export const loadingUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      dispatch(fetchUsers(await fetchHttp("/users")));
    } catch (error) {
      dispatch(isError(error));
      throw error.message;
    }
  };
};

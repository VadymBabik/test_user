import * as types from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_USER:
      return { ...state, isLoading: true };
    case types.LOADING_ERROR:
      return { ...state, isError: action.payload };
    case types.FETCH_USERS:
      return {
        ...state,
        isLoading: false,
        isError: null,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

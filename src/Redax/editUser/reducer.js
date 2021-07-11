import * as types from "./actions";

const initialState = {
  isEdit: false,
  processSave: false,
  userId: null,
  name: "",
  surname: "",
  desc: "",
};
const userEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_EDIT_USER: {
      return {
        ...state,
        isEdit: true,
        userId: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        desc: action.payload.desc,
      };
    }
    case types.USER_EDIT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.PROCESS_SAVE: {
      return {
        ...state,
        processSave: true,
      };
    }
    case types.FINISH_EDIT_USER: {
      return {
        ...state,
        isEdit: false,
        processSave: false,
        userId: null,
        name: "",
        surname: "",
        desc: "",
      };
    }
    default:
      return state;
  }
};

export default userEditReducer;

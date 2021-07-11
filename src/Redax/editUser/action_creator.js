import * as types from "./actions";
export const edit = (payload) => ({ type: types.IS_EDIT_USER, payload });
export const editUser = (payload) => ({ type: types.USER_EDIT, payload });
export const saveEditUser = () => ({ type: types.FINISH_EDIT_USER });
export const processSave = () => ({ type: types.PROCESS_SAVE });

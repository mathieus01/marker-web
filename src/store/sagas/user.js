import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as UserActions } from "../ducks/user";

export function* findUsersByName(action) {
  try {
    const { username } = action.payload;
    const { data } = yield call(
      api.get,
      `users/users-by-name?username=${username}`
    );
    yield put(UserActions.findUsersByUsernameSuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(UserActions.setError());
  }
}

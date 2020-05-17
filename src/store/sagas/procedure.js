import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as ProceduresActions } from "../ducks/procedure";

export function* getProcedures(action) {
  try {
    const { name } = action.payload;
    const { data } = yield call(api.get, `procedures`, { params: { name } });
    yield put(ProceduresActions.getProceduresSuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(ProceduresActions.setError());
  }
}

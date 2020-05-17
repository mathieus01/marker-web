import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as ScheduleActions } from "../ducks/schedule";

export function* getSimpleSchedule(action) {
  try {
    const { data } = yield call(api.get, `schedule`);
    yield put(ScheduleActions.getSimpleScheduleSuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(ScheduleActions.setError());
  }
}

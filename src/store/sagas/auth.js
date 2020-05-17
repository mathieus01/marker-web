import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as AuthActions } from "../ducks/auth";
import { login } from "../../services/auth";

export function* signin(action) {
  try {
    console.log(action);
    const { data } = yield call(api.post, `/sessions`, action.payload);

    login(data.token);
    yield put(AuthActions.signInSuccess(data));
    yield put(push("/app"));
    toast.success("Usuario autenticado com sucesso!");
  } catch (err) {
    console.log("erro", err);
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(AuthActions.error());
  }
}
export function* signup(action) {
  try {
    yield call(api.post, `/users`, action.payload);

    yield put(AuthActions.signupSuccess());
    yield put(push("/validate"));
    toast.success("Conta Criada com sucesso");
  } catch (err) {
    console.log(err);
    const error = err.response.data[0] || err.response.data.error;
    toast.error(error.message);
    yield put(AuthActions.error());
  }
}

export function* validateAccount(action) {
  try {
    yield call(api.get, `/accounts?token=${action.payload.token}`);

    yield put(AuthActions.validateAccountSuccess());
    yield put(push("/signin"));
    toast.success("Conta validada com sucesso!");
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(AuthActions.error());
  }
}

import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as SurgeryActions } from '../ducks/surgery';

export function* getSurgeries(action) {
  try {
    const { data } = yield call(api.get, `surgeries`, {
      params: action.payload.filter,
    });
    yield put(SurgeryActions.getSurgeriesSuccess(data.data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(SurgeryActions.setError());
  }
}
export function* getSurgery(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(api.get, `surgeries/${id}`);
    yield put(SurgeryActions.getSurgerySuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(SurgeryActions.setError());
  }
}

export function* saveSurgery(action) {
  try {
    const { surgery } = action.payload;
    yield call(api.post, `surgeries`, surgery);

    toast.success('Cirurgia cadastrada com sucesso');
    yield put(SurgeryActions.saveSurgerySuccess());
    yield put(SurgeryActions.getSurgeriesRequest({ patient: surgery.patient_id }));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(SurgeryActions.setError());
  }
}

export function* updateSurgery(action) {
  try {
    const { surgery } = action.payload;
    yield call(api.put, `surgeries/${surgery.id}`, surgery);

    toast.success('Cirurgia atualizada com sucesso');
    yield put(SurgeryActions.updateSurgerySuccess());
    yield put(SurgeryActions.getSurgeriesRequest({ patient: surgery.patient_id }));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(SurgeryActions.setError());
  }
}

export function* removeSurgery(action) {
  try {
    const { id } = action.payload;
    yield call(api.delete, `surgeries/${id}`);
    yield put(SurgeryActions.removeSurgerySuccess(id));
    toast.success('Cirurgia removida com sucesso');
  } catch (err) {
    console.log('removeSurgery', err);
    const error = err.response.data[0] || err.response.data.error;
    toast.error(error.message);
    yield put(SurgeryActions.setError());
  }
}

import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PatientAction } from '../ducks/patient';

export function* getPatients(action) {
  try {
    const { page } = action.payload;
    const { data } = yield call(api.get, `/patients/userPatients?page=${page}`);
    yield put(PatientAction.getPatientsSuccess(data));
  } catch (error) {
    yield put(PatientAction.setError());
  }
}

export function* getPatient(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(api.get, `/patients/${id}`);
    yield put(PatientAction.getPatientSuccess(data));
  } catch (error) {
    yield put(PatientAction.setError());
  }
}

export function* savePatient(action) {
  try {
    const { data } = yield call(api.post, `/patients`, action.payload.patient);
    console.log(data);
    yield put(PatientAction.savePatientSuccess());
    yield put(push(`/patient/${data.id}`));
    toast.success('Paciente cadastrado com sucesso');
  } catch (err) {
    console.log(err);
    const error = err.response.data[0] || err.response.data.error;
    toast.error(error.message);
    yield put(PatientAction.setError());
  }
}

export function* removePatient(action) {
  try {
    const { id } = action.payload;
    yield call(api.delete, `patients/${id}`);
    yield put(PatientAction.removePatientSuccess(id));
    toast.success('Paciente removido com sucesso');
  } catch (err) {
    console.log('removePatient', err);
    const error = err.response.data[0] || err.response.data.error;
    toast.error(error.message);
    yield put(PatientAction.setError());
  }
}

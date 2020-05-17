import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { Creators as GroupActions } from '../ducks/group';

export function* getGroupsByUser(action) {
  try {
    const { page } = action.payload;
    const { data } = yield call(api.get, `groups/userGroups?page=${page}`);
    yield put(GroupActions.getGroupsByUserSuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

export function* saveGroup(action) {
  try {
    const { data } = yield call(api.post, 'groups', action.payload.group);
    yield put(GroupActions.saveGroupSuccess(data));
    yield put(push(`/groups/${data.id}`));
    toast.success('Grupo criado com sucesso');
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}
export function* updateGroup(action) {
  try {
    const { id } = action.payload.group;
    const { data } = yield call(api.put, `groups/${id}`, action.payload.group);
    yield put(GroupActions.updateGroupSuccess(data));
    toast.success('Grupo atualizado com sucesso');
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

export function* getGroup(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(api.get, `groups/${id}`);
    yield put(GroupActions.getGroupSuccess(data));
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

export function* deleteGroup(action) {
  try {
    const { id } = action.payload;
    yield call(api.delete, `groups/${id}`, action.payload.group);
    yield put(GroupActions.deleteGroupSuccess(id));
    toast.success('Grupo deletado com sucesso');
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

export function* addUsersToGroup(action) {
  try {
    const { users, group_id } = action.payload;
    const { data } = yield call(api.post, `groups/${group_id}/addUserToGroup`, {
      users,
    });
    yield put(GroupActions.addUsersToGroupSuccess(data));
    const msg = users.length > 1 ? 'Usuarios adicionado com sucesso' : 'Usuario adicionado com sucesso';
    toast.success(msg);
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

export function* removeUsersToGroup(action) {
  try {
    const { users, group_id } = action.payload;
    const { data } = yield call(api.post, `groups/${group_id}/removeUser`, {
      users,
    });
    yield put(GroupActions.addUsersToGroupSuccess(data));
    const msg = users.length > 1 ? 'Usuarios removido com sucesso' : 'Usuario removido com sucesso';
    toast.success(msg);
  } catch (err) {
    const { error } = err.response.data;
    toast.error(error.message);
    yield put(GroupActions.setError());
  }
}

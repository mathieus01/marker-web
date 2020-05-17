import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { Types as GroupTypes } from "../ducks/group";
import { Types as PatientTypes } from "../ducks/patient";
import { Types as UserTypes } from "../ducks/user";
import { Types as SurgeryTypes } from "../ducks/surgery";
import { Types as ScheduleTypes } from "../ducks/schedule";
import { Types as ProcedureTypes } from "../ducks/procedure";

import { signin, signup, validateAccount } from "./auth";
import {
  getGroupsByUser,
  getGroup,
  saveGroup,
  updateGroup,
  deleteGroup,
  addUsersToGroup,
  removeUsersToGroup,
} from "./group";
import { getPatients, savePatient, getPatient, removePatient } from "./patient";
import {
  getSurgery,
  getSurgeries,
  saveSurgery,
  updateSurgery,
  removeSurgery,
} from "./surgery";
import { findUsersByName } from "./user";
import { getSimpleSchedule } from "./schedule";
import { getProcedures } from "./procedure";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signin),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signup),
    takeLatest(AuthTypes.VALIDATE_ACCOUNT_REQUEST, validateAccount),
    takeLatest(GroupTypes.GET_GROUPS_BY_USER_REQUEST, getGroupsByUser),
    takeLatest(GroupTypes.GET_GROUP_REQUEST, getGroup),
    takeLatest(GroupTypes.SAVE_GROUP_REQUEST, saveGroup),
    takeLatest(GroupTypes.UPDATE_GROUP_REQUEST, updateGroup),
    takeLatest(GroupTypes.DELETE_GROUP_REQUEST, deleteGroup),
    takeLatest(GroupTypes.ADD_USERS_GROUP_REQUEST, addUsersToGroup),
    takeLatest(GroupTypes.REMOVE_USERS_GROUP_REQUEST, removeUsersToGroup),
    takeLatest(PatientTypes.GET_PATIENTS_REQUEST, getPatients),
    takeLatest(PatientTypes.GET_PATIENT_REQUEST, getPatient),
    takeLatest(PatientTypes.POST_PATIENT_REQUEST, savePatient),
    takeLatest(PatientTypes.REMOVE_PATIENT_REQUEST, removePatient),
    takeLatest(UserTypes.FIND_USERS_BY_USERNAME_REQUEST, findUsersByName),
    takeLatest(SurgeryTypes.GET_SURGERY_REQUEST, getSurgery),
    takeLatest(SurgeryTypes.GET_SURGERIES_REQUEST, getSurgeries),
    takeLatest(SurgeryTypes.SAVE_SURGERY_REQUEST, saveSurgery),
    takeLatest(SurgeryTypes.UPDATE_SURGERY_REQUEST, updateSurgery),
    takeLatest(SurgeryTypes.REMOVE_SURGERY_REQUEST, removeSurgery),
    takeLatest(ScheduleTypes.SIMPLE_SCHEDULE_REQUEST, getSimpleSchedule),
    takeLatest(ProcedureTypes.GET_PROCEDURES_REQUEST, getProcedures),
  ]);
}

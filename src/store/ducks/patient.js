export const Types = {
  GET_PATIENTS_REQUEST: 'patient/GET_PATIENTS_REQUEST',
  GET_PATIENTS_SUCCESS: 'patient/GET_PATIENTS_SUCCESS',
  GET_PATIENT_REQUEST: 'patient/GET_PATIENT_REQUEST',
  GET_PATIENT_SUCCESS: 'patient/GET_PATIENT_SUCCESS',
  POST_PATIENT_REQUEST: 'patient/POST_PATIENT_REQUEST',
  POST_PATIENT_SUCCESS: 'patient/POST_PATIENT_SUCCESS',
  REMOVE_PATIENT_REQUEST: 'patient/REMOVE_PATIENT_REQUEST',
  REMOVE_PATIENT_SUCCESS: 'patient/REMOVE_PATIENT_SUCCESS',
  SET_ERROR: 'patient/SET_ERROR',
};

const INITIAL_STATE = {
  total: '0',
  patient: {},
  patients: [],
  page: 1,
  lastPage: 1,
  loading: false,
};

export default function patient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PATIENTS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_PATIENTS_SUCCESS:
      const newPage = action.payload.response.page || 1;
      const lastPage = action.payload.response.lastPage;
      const patients = action.payload.response.data;
      const total = action.payload.response.total;
      return {
        ...state,
        loading: false,
        patients: newPage === state.page ? patients : [...state.patients, ...patients],
        page: newPage,
        lastPage,
        total,
      };
    case Types.GET_PATIENT_REQUEST:
      return { ...state, loading: true };
    case Types.GET_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        patient: action.payload.patient,
      };
    case Types.POST_PATIENT_REQUEST:
      return { ...state, loading: true };
    case Types.POST_PATIENT_SUCCESS:
      return { ...state, loading: false };
    case Types.REMOVE_PATIENT_REQUEST:
      return { ...state, loading: true };
    case Types.REMOVE_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        patients: state.patients.filter((patient) => patient.id !== action.payload.id),
      };
    case Types.SET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getPatientsRequest: (page) => ({
    type: Types.GET_PATIENTS_REQUEST,
    payload: { page },
  }),

  getPatientsSuccess: (response) => ({
    type: Types.GET_PATIENTS_SUCCESS,
    payload: { response },
  }),

  getPatientRequest: (id) => ({
    type: Types.GET_PATIENT_REQUEST,
    payload: { id },
  }),

  getPatientSuccess: (patient) => ({
    type: Types.GET_PATIENT_SUCCESS,
    payload: { patient },
  }),

  savePatientRequest: (patient) => ({
    type: Types.POST_PATIENT_REQUEST,
    payload: { patient },
  }),

  savePatientSuccess: () => ({
    type: Types.POST_PATIENT_SUCCESS,
  }),

  removePatientRequest: (id) => ({
    type: Types.REMOVE_PATIENT_REQUEST,
    payload: { id },
  }),

  removePatientSuccess: (id) => ({
    type: Types.REMOVE_PATIENT_SUCCESS,
    payload: { id },
  }),

  setError: () => ({
    type: Types.SET_ERROR,
  }),
};

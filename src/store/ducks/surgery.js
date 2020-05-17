export const Types = {
  GET_SURGERIES_REQUEST: "surgery/GET_SURGERIES_REQUEST",
  GET_SURGERIES_SUCCESS: "surgery/GET_SURGERIES_SUCCESS",
  GET_SURGERY_REQUEST: "surgery/GET_SURGERY_REQUEST",
  GET_SURGERY_SUCCESS: "surgery/GET_SURGERY_SUCCESS",
  SAVE_SURGERY_REQUEST: "surgery/SAVE_SURGERY_REQUEST",
  SAVE_SURGERY_SUCCESS: "surgery/SAVE_SURGERY_SUCCESS",
  UPDATE_SURGERY_REQUEST: "surgery/UPDATE_SURGERY_REQUEST",
  UPDATE_SURGERY_SUCCESS: "surgery/UPDATE_SURGERY_SUCCESS",
  REMOVE_SURGERY_REQUEST: "surgery/REMOVE_SURGERY_REQUEST",
  REMOVE_SURGERY_SUCCESS: "surgery/REMOVE_SURGERY_SUCCESS",
  SET_ERROR: "surgery/SET_ERROR",
};

const INITIAL_STATE = {
  surgery: null,
  surgeries: [],
  loading: false,
};

export default function surgery(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SURGERIES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SURGERIES_SUCCESS:
      return { ...state, loading: false, surgeries: action.payload.surgeries };
    case Types.GET_SURGERY_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SURGERY_SUCCESS:
      return { ...state, loading: false, surgery: action.payload.surgery };
    case Types.SAVE_SURGERY_REQUEST:
      return { ...state, loading: true };
    case Types.SAVE_SURGERY_SUCCESS:
      return { ...state, loading: false };
    case Types.UPDATE_SURGERY_REQUEST:
      return { ...state, loading: true };
    case Types.UPDATE_SURGERY_SUCCESS:
      return { ...state, loading: false };
    case Types.REMOVE_SURGERY_REQUEST:
      return { ...state, loading: true };
    case Types.REMOVE_SURGERY_SUCCESS:
      return {
        ...state,
        loading: false,
        surgeries: state.surgeries.filter(
          (surgery) => surgery.id !== action.payload.id
        ),
      };
    case Types.SET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getSurgeriesRequest: (filter) => ({
    type: Types.GET_SURGERIES_REQUEST,
    payload: { filter },
  }),

  getSurgeriesSuccess: (surgeries) => ({
    type: Types.GET_SURGERIES_SUCCESS,
    payload: { surgeries },
  }),

  getSurgeryRequest: () => ({
    type: Types.GET_SURGERY_REQUEST,
  }),

  getSurgerySuccess: (surgery) => ({
    type: Types.GET_SURGERY_SUCCESS,
    payload: { surgery },
  }),

  saveSurgeryRequest: (surgery) => ({
    type: Types.SAVE_SURGERY_REQUEST,
    payload: { surgery },
  }),

  saveSurgerySuccess: () => ({
    type: Types.SAVE_SURGERY_SUCCESS,
  }),

  updateSurgeryRequest: (surgery) => ({
    type: Types.UPDATE_SURGERY_REQUEST,
    payload: { surgery },
  }),

  updateSurgerySuccess: () => ({
    type: Types.UPDATE_SURGERY_SUCCESS,
  }),

  removeSurgeryRequest: (id) => ({
    type: Types.REMOVE_SURGERY_REQUEST,
    payload: { id },
  }),

  removeSurgerySuccess: (id) => ({
    type: Types.REMOVE_SURGERY_SUCCESS,
    payload: { id },
  }),

  setError: () => ({
    type: Types.SET_ERROR,
  }),
};

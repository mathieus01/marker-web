export const Types = {
  GET_PROCEDURES_REQUEST: "procedure/GET_PROCEDURES_REQUEST",
  GET_PROCEDURES_SUCCESS: "procedure/GET_PROCEDURES_SUCCESS",
  CLEAN_PROCEDURE_LIST: "procedure/CLEAN_PROCEDURE_LIST",
  SET_ERROR: "procedure/ERROR"
};

const INITIAL_STATE = {
  procedures: [],
  loading: false
};

export default function procedure(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PROCEDURES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_PROCEDURES_SUCCESS:
      return {
        ...state,
        loading: false,
        procedures: action.payload.procedures
      };
    case Types.CLEAN_PROCEDURE_LIST: {
      return { ...state, procedures: [] };
    }
    case Types.SET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getProceduresRequest: name => ({
    type: Types.GET_PROCEDURES_REQUEST,
    payload: { name }
  }),

  getProceduresSuccess: procedures => ({
    type: Types.GET_PROCEDURES_SUCCESS,
    payload: { procedures }
  }),

  cleanProcedures: () => ({
    type: Types.CLEAN_PROCEDURE_LIST
  }),

  setError: () => ({
    type: Types.SET_ERROR
  })
};

export const Types = {
  SIGN_IN_REQUEST: "auth/REQUEST",
  SIGN_IN_SUCCESS: "auth/SUCCESS",
  SIGN_UP_REQUEST: "auth/SING_UP_REQUEST",
  SIGN_UP_SUCCESS: "auth/SING_UP_SUCCESS",
  VALIDATE_ACCOUNT_REQUEST: "auth/VALIDATE_ACCOUNT_REQUEST",
  VALIDATE_ACCOUNT_SUCCESS: "auth/VALIDATE_ACCOUNT_SUCCESS",
  ERROR: "auth/ERROR",
};

const INITIAL_STATE = {
  token: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.user.token,
        loading: false,
      };
    case Types.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_UP_SUCCESS:
      return { ...state, loading: false };
    case Types.VALIDATE_ACCOUNT_REQUEST:
      return { ...state, loading: true };
    case Types.VALIDATE_ACCOUNT_SUCCESS:
      return { ...state, loading: false };
    case Types.ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: (user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { user },
  }),

  signupRequest: (user) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { ...user },
  }),

  signupSuccess: () => ({
    type: Types.SIGN_UP_SUCCESS,
    payload: {},
  }),

  validateAccountRequest: (token) => ({
    type: Types.VALIDATE_ACCOUNT_REQUEST,
    payload: { token },
  }),

  validateAccountSuccess: () => ({
    type: Types.VALIDATE_ACCOUNT_SUCCESS,
    payload: {},
  }),

  error: () => ({
    type: Types.ERROR,
    payload: {},
  }),
};

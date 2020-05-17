export const Types = {
  FIND_USERS_BY_USERNAME_REQUEST: "user/FIND_USERS_BY_USERNAME_REQUEST",
  FIND_USERS_BY_USERNAME_SUCCESS: "user/FIND_USERS_BY_USERNAME_SUCCESS",
  SET_ERROR: "group/ERROR"
};

const INITIAL_STATE = {
  users: [],
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FIND_USERS_BY_USERNAME_REQUEST:
      return { ...state, loading: true };
    case Types.FIND_USERS_BY_USERNAME_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };
    default:
      return state;
  }
}

export const Creators = {
  findUsersByUsernameRequest: username => ({
    type: Types.FIND_USERS_BY_USERNAME_REQUEST,
    payload: { username }
  }),

  findUsersByUsernameSuccess: users => ({
    type: Types.FIND_USERS_BY_USERNAME_SUCCESS,
    payload: { users }
  }),

  setError: () => ({
    type: Types.SET_ERROR
  })
};

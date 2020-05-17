export const Types = {
  GET_GROUPS_BY_USER_REQUEST: 'group/GET_GROUPS_BY_USER_REQUEST',
  GET_GROUPS_BY_USER_SUCCESS: 'group/GET_GROUPS_BY_USER_SUCCESS',
  GET_GROUP_REQUEST: 'group/GET_GROUP_REQUEST',
  GET_GROUP_SUCCESS: 'group/GET_GROUP_SUCCESS',
  SAVE_GROUP_REQUEST: 'group/SAVE_GROUP_REQUEST',
  SAVE_GROUP_SUCCESS: 'group/SAVE_GROUP_SUCCESS',
  UPDATE_GROUP_REQUEST: 'group/UPDATE_GROUP_REQUEST',
  UPDATE_GROUP_SUCCESS: 'group/UPDATE_GROUP_SUCCESS',
  DELETE_GROUP_REQUEST: 'group/DELETE_GROUP_REQUEST',
  DELETE_GROUP_SUCCESS: 'group/DELETE_GROUP_SUCCESS',
  ADD_USERS_GROUP_REQUEST: 'group/ADD_USERS_GROUP_REQUEST',
  ADD_USERS_GROUP_SUCCESS: 'group/ADD_USERS_GROUP_SUCCESS',
  REMOVE_USERS_GROUP_REQUEST: 'group/REMOVE_USERS_GROUP_REQUEST',
  REMOVE_USERS_GROUP_SUCCESS: 'group/REMOVE_USERS_GROUP_SUCCESS',
  SET_ERROR: 'group/ERROR',
};

const INITIAL_STATE = {
  total: '0',
  page: 1,
  lastPage: 1,
  groups: [],
  group: {},
  loading: false,
};

export default function group(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.GET_GROUPS_BY_USER_REQUEST:
      return { ...state, loading: true };
    case Types.GET_GROUPS_BY_USER_SUCCESS:
      const newPage = actions.payload.response.page;
      const lastPage = actions.payload.response.lastPage;
      const groups = actions.payload.response.data;
      const total = actions.payload.response.total;
      return {
        ...state,
        loading: false,
        groups: newPage === state.page ? groups : [...state.groups, ...groups],
        page: newPage,
        lastPage,
        total,
      };
    case Types.GET_GROUP_REQUEST:
      return { ...state, loading: true };
    case Types.GET_GROUP_SUCCESS:
      return { ...state, loading: false, group: actions.payload.group };
    case Types.SAVE_GROUP_REQUEST:
      return { ...state, loading: true };
    case Types.SAVE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: [...state.groups, actions.payload.group],
      };
    case Types.UPDATE_GROUP_REQUEST:
      return { ...state, loading: true };
    case Types.UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        group: actions.payload.group,
      };
    case Types.DELETE_GROUP_REQUEST:
      return { ...state, loading: true };
    case Types.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        groups: state.groups.filter((group) => group.id !== actions.payload.id),
      };
    case Types.ADD_USERS_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_USERS_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        group: actions.payload.group,
      };
    case Types.REMOVE_USERS_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.REMOVE_USERS_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        group: actions.payload.group,
      };
    case Types.SET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getGroupsByUserRequest: (page) => ({
    type: Types.GET_GROUPS_BY_USER_REQUEST,
    payload: { page },
  }),

  getGroupsByUserSuccess: (response) => ({
    type: Types.GET_GROUPS_BY_USER_SUCCESS,
    payload: { response },
  }),

  getGroupRequest: (id) => ({
    type: Types.GET_GROUP_REQUEST,
    payload: { id },
  }),

  getGroupSuccess: (group) => ({
    type: Types.GET_GROUP_SUCCESS,
    payload: { group },
  }),

  saveGroupRequest: (group) => ({
    type: Types.SAVE_GROUP_REQUEST,
    payload: { group },
  }),

  saveGroupSuccess: (group) => ({
    type: Types.SAVE_GROUP_SUCCESS,
    payload: { group },
  }),

  updateGroupRequest: (group) => ({
    type: Types.UPDATE_GROUP_REQUEST,
    payload: { group },
  }),

  updateGroupSuccess: (group) => ({
    type: Types.UPDATE_GROUP_SUCCESS,
    payload: { group },
  }),

  deleteGroupRequest: (id) => ({
    type: Types.DELETE_GROUP_REQUEST,
    payload: { id },
  }),

  deleteGroupSuccess: (id) => ({
    type: Types.DELETE_GROUP_SUCCESS,
    payload: { id },
  }),

  addUsersToGroupRequest: (users, group_id) => ({
    type: Types.ADD_USERS_GROUP_REQUEST,
    payload: { users, group_id },
  }),

  addUsersToGroupSuccess: (group) => ({
    type: Types.ADD_USERS_GROUP_SUCCESS,
    payload: { group },
  }),

  removeUsersToGroupRequest: (users, group_id) => ({
    type: Types.REMOVE_USERS_GROUP_REQUEST,
    payload: { users, group_id },
  }),

  removeUsersToGroupSuccess: (group) => ({
    type: Types.REMOVE_USERS_GROUP_SUCCESS,
    payload: { group },
  }),

  setError: () => ({
    type: Types.SET_ERROR,
  }),
};

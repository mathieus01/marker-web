export const Types = {
  SIMPLE_SCHEDULE_REQUEST: "schedule/SIMPLE_SCHEDULE_REQUEST",
  SIMPLE_SCHEDULE_SUCCESS: "schedule/SIMPLE_SCHEDULE_SUCCESS",
  SET_ERROR: "schedule/ERROR"
};

const INITIAL_STATE = {
  schedule: [],
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIMPLE_SCHEDULE_REQUEST:
      return { ...state, loading: true };
    case Types.SIMPLE_SCHEDULE_SUCCESS:
      return { ...state, loading: false, schedule: action.payload.schedule };
    default:
      return state;
  }
}

export const Creators = {
  getSimpleScheduleRequest: () => ({
    type: Types.SIMPLE_SCHEDULE_REQUEST
  }),

  getSimpleScheduleSuccess: schedule => ({
    type: Types.SIMPLE_SCHEDULE_SUCCESS,
    payload: { schedule }
  }),

  setError: () => ({
    type: Types.SET_ERROR
  })
};

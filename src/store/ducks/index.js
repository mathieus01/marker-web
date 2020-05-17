import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../../routes/history";

//reducers
import auth from "./auth";
import group from "./group";
import patient from "./patient";
import user from "./user";
import surgery from "./surgery";
import schedule from "./schedule";
import procedure from "./procedure";

const reducers = combineReducers({
  auth,
  group,
  patient,
  user,
  surgery,
  schedule,
  procedure,
  router: connectRouter(history)
});

export default reducers;

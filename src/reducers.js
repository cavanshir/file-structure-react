import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "utils/history";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: require("helpers/LanguageProvider/redux").reducer,
    auth: require("containers/App/Login/redux").reducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

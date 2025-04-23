import { combineReducers } from "redux";
import detailReducer from "./detailReduceer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;

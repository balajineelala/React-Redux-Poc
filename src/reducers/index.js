import { combineReducers } from "redux";

import Articles from "./Articles";
import ArticleDetails from "./ArticleDetails";
import Users from "./Users";

const rootReducer = combineReducers({
  articles: Articles,
  articleDetails: ArticleDetails,
  users: Users,
});

export default rootReducer;

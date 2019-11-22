import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import reducer from "../redux/reducers";

const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;

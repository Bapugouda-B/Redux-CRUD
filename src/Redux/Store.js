import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { Reducer } from "./Reducer.js";
import logger from "redux-logger";

const rootReducer = combineReducers({ user:Reducer });
const Store = configureStore({
  reducer: rootReducer,
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)});
export default Store;

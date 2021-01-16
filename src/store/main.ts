import { createStore, combineReducers } from "redux";
import {
  UserState,
  userReducer,
  LocationState,
  locationReducer,
  LoadingState,
  loadingReducer,
} from "./reducers";

export type Appstate = {
  user: UserState;
  location: LocationState;
  isLoading: LoadingState;
};

const store = createStore(
  combineReducers<Appstate>({
    user: userReducer,
    location: locationReducer,
    isLoading: loadingReducer,
  })
);

export default store;

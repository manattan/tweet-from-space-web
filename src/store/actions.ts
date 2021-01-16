import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

type location = {
  longitude: number;
  latitude: number;
};

const Actions = {
  updateUserId: actionCreator<string>("ACTIONS_UPDATE_USERID"),
  updateUserName: actionCreator<string>("ACTIONS_UPDATE_USERNAME"),
  updateLocation: actionCreator<location>("ACTIONS_UPDATE_LOCATION"),
  updateLoading: actionCreator<boolean>("ACTIONS_UPDATE_LOADING"),
};
export default Actions;

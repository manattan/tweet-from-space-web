/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "./auth/Firebase";
import { getISSLocation } from "./API/main";
import Main from "./components/Main";
import PageLogin from "./components/PageLogin";
import "firebase/auth";
import { UserState, LocationState } from "./store/reducers";
import { Appstate } from "./store/main";
import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import Actions from "./store/actions";

interface UserActions {
  updateUserId: (v: string) => Action<string>;
  updateUserName: (v: string) => Action<string>;
}

interface LocationActions {
  updateLocation: (v: location) => Action<location>;
}

type Props = UserState & UserActions & LocationState & LocationActions;

type location = {
  longitude: number;
  latitude: number;
};

const App: React.FC<Props> = (props: Props) => {
  let isJapan = false;
  let fininit = false;
  const getLoc = () => {
    if (!fininit) {
      setInterval(async () => {
        const res: any = await getISSLocation();
        res.latitude -= 0;
        res.longitude -= 0;
        if (
          20 < props.location.latitude &&
          props.location.latitude < 46 &&
          122 < props.location.longitude &&
          props.location.longitude < 154
        ) {
          isJapan = true;
        }
        props.updateLocation(res);
        fininit = true;
      }, 3000);
    }
  };

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.displayName && user?.uid) {
        props.updateUserId(user.uid);
        props.updateUserName(user.displayName);
      }
    });
    getLoc();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              props.name ? (
                <Main
                  location={{
                    longitude: props.location.longitude,
                    latitude: props.location.latitude,
                  }}
                  name={props.name}
                  isJapan={isJapan}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={() => (props.name ? <Redirect to="/" /> : <PageLogin />)}
          />
        </Switch>
      </Router>
    </div>
  );
};

function mapStateToProps(appState: Appstate) {
  return Object.assign({}, appState.user, appState.location);
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateUserId: (v: string) => dispatch(Actions.updateUserId(v)),
    updateUserName: (v: string) => dispatch(Actions.updateUserName(v)),
    updateLocation: (v: location) => dispatch(Actions.updateLocation(v)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

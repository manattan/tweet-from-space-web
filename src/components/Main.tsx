/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShowLocation from "./ShowLocation";
import WelcomeDM from "./WelcomeDM";
import Logout from "./Logout";
import TweetComponent from "./TweetComponent";
import MainHeader from "./MainHeader";
import RouteToMap from "./RouteToMap";
import { Action } from "typescript-fsa";
import { LoadingState } from "../store/reducers";
import { Appstate } from "../store/main"
import { Dispatch } from "redux";
import Actions from "../store/actions";

type location = {
  longitude: number;
  latitude: number;
};

type props = {
  location: location;
  name: string;
  isJapan: boolean;
  startFade: boolean;
};

type LoadingActions = {
  updateLoading: (v:boolean) => Action<boolean>
}

type Props = props & LoadingActions & LoadingState

const Main: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.updateLoading(false)
    }, 2000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {props.isLoading && <CircularProgress style={{ margin: "auto" }} />}
        {!props.isLoading && (
          <section className="fade">
            <MainHeader />
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <ShowLocation
                  location={props.location.latitude}
                  displayName={"緯度"}
                />
              </Grid>
              <Grid item xs={5}>
                <ShowLocation
                  location={props.location.longitude}
                  displayName={"経度"}
                />
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <RouteToMap />
            {!props.isJapan && <WelcomeDM isJapan={props.isJapan} />}
            <div style={{ marginTop: "40px" }}>
              <Logout />
            </div>
            <TweetComponent />
          </section>
        )}
      </header>
    </div>
  );
};

function mapStateToProps(appState:Appstate) {
  return Object.assign({}, appState.isLoading);
}

function mapDispatchToProps(dispatch: Dispatch<Action<boolean>>) {
  return {
    updateLoading: (v:boolean) => dispatch(Actions.updateLoading(v))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

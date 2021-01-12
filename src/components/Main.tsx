import React, { useEffect, useState } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShowLocation from "./ShowLocation";
import WelcomeDM from "./WelcomeDM";
import Logout from "./Logout";
import TweetComponent from "./TweetComponent";
import MainHeader from "./MainHeader";

type location = {
  longitude: number;
  latitude: number;
};

type Props = {
  location: location;
  name: string;
  isJapan: boolean;
  startFade: boolean;
};

const Main: React.FC<Props> = (props: Props) => {
  const [isLoading, set] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      set(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <CircularProgress style={{ margin: "auto" }} />}
        {!isLoading && (
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

export default Main;

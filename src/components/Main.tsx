import React, { useEffect, useState } from "react";
import "../App.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import WelcomeDM from "./WelcomeDM";
import Logout from "./Logout";

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
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <section className="fade">
            <h1>宇宙からの呟きを待つんや.</h1>
            <p>Hello, {props.name}</p>
            <p>
              ISSですが、緯度{props.location.latitude}度, 経度
              {props.location.longitude}度 の地点にあるわ
            </p>
            {props.isJapan && <WelcomeDM isJapan={props.isJapan} />}
            <Logout />
          </section>
        )}
      </header>
    </div>
  );
};

export default Main;

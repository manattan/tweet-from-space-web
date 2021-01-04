import React from "react";
import "../App.css";
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
};

const Main: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <p>Hello, {props.name}</p>
        <p>
          ISSですが、緯度{props.location.latitude}度, 経度
          {props.location.longitude}度 の地点にあるわ
        </p>
        {props.isJapan && <WelcomeDM isJapan={props.isJapan} />}
        <Logout />
      </header>
    </div>
  );
};

export default Main;

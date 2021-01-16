import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Map: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <p>ISSの位置を確認する</p>
        <img src="/worldmap.jpg" alt="" style={{maxWidth: 800, margin: '0 auto'}}/>
        <Grid container style={{ height: 80 }}>
          <Grid item xs={4}>
            <p style={{ fontSize: 18 }}>topページに戻る</p>
            <Link to="/">
              <ArrowBackIcon />
            </Link>
          </Grid>
          <Grid item xs={8} />
        </Grid>
      </div>
    </div>
  );
};

export default Map;

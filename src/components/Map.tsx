import React from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Map: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
          <p>ISSの位置を確認する
          </p>

          <Grid container>
              <Grid item xs={4}>
                  <Link to="/"> 
                  <p>topページに戻る</p>
                  </Link>
              </Grid>
              <Grid item xs={8}/>
          </Grid>
      </div>
    </div>
  );
};

export default Map;

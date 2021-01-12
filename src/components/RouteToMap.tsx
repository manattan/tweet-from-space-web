import React from "react";
import { Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
const RouteToMap: React.FC = () => {
  return (
    <div style={{ height: 80 }}>
      <Grid container style={{ fontSize: "medium" }}>
        <Grid item xs={8} />
        <Grid item xs={4}>
          <p>map上で位置を確認する</p>
          <Link to="/map" style={{ display: "block" }}>
            <ArrowForwardIcon style={{ marginTop: -10 }} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default RouteToMap;

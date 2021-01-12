import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const boxStyles = {
  margin: 50,
};

const styles = {
  height: 500,
  width: 400,
  marginTop: 50,
};

const TweetComponent = () => {
  return (
    <div style={{ ...boxStyles }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Space_Station"
        options={{ ...styles }}
      />
    </div>
  );
};
export default TweetComponent;

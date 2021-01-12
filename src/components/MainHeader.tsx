import React from "react";
const styles = {
  height: 100,
};

const h1Styles = {
  marginTop: 180,
  fontSize: "120%",
};

const MainHeader: React.FC = () => {
  return (
    <div style={{ ...styles }}>
      <h1 style={{ ...h1Styles }}>現在の国際宇宙ステーション</h1>
    </div>
  );
};

export default MainHeader;

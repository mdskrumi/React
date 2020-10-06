import React from "react";

import "../css/SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "Alhamdulillah, It's Summer.",
    icon: "sun",
  },
  Winter: {
    text: "Alhamdulillah, It's Winter.",
    icon: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i id="icon-left" className={`massive ${icon} icon`} />
      <h1>{text}</h1>
      <i id="icon-right" className={`massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

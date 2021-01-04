import React from "react";
import './CSS/showLocation.css'

type Props = {
  location?: number;
  displayName?: string;
};

const ShowLocation = (props: Props) => {
    const locationInfo:any = props.location
    const locationMain = locationInfo.toFixed(0)
    let locationSub = (locationInfo - locationMain).toString()
    if (locationSub[0] === '-'){
        locationSub = locationSub.substr(2,4)
    }else {
        locationSub = locationSub.substr(1,4)
    }
    
  return (
    <section>
      <h1>{props.displayName}</h1>
      <p className="locationMain">{locationMain}</p>
      <p className="locationSub">{locationSub} 度</p>
    </section>
  );
};

export default ShowLocation;

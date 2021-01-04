import React from "react";

type Props = {
  location?: number;
  displayName?: string;
};

const ShowLocation = (props: Props) => {
  return (
    <section>
      <h1>{props.displayName}</h1>
      <p>{props.location}</p>
    </section>
  );
};

export default ShowLocation;

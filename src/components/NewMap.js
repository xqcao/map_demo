import React, { useEffect, useState } from "react";
import { VectorMap } from "react-jvectormap";
const NewMap = () => {
  const amap = React.createRef(null);
  const [flag, seFlag] = useState(false);
  useEffect(() => {
    seFlag(true);
  }, []);
  return (
    <div>
      <h2>New Map</h2>
      <div style={{ width: 500, height: 500 }}>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent"
          ref={amap}
          containerStyle={{
            width: "100%",
            height: "80%",
          }}
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //what colour clicked country will be
            },
            selectedHover: {},
          }}
          containerClassName="map"
        />
        <p>{flag}</p>
      </div>
    </div>
  );
};

export default NewMap;

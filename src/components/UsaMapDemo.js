import React, { useRef, useEffect, useState } from "react";
import { VectorMap } from "react-jvectormap";
const UsaMapDemo = () => {
  const mapRef = useRef("map");
  const [mapFlag, setMapFlag] = useState(false);
  useEffect(() => {
    setMapFlag(true);
  }, []);
  return (
    <div>
      <h2>USA Map Demo</h2>
      <div style={{ width: 500, height: 500 }} key="hello_map">
        <VectorMap
          map={"us_aea"}
          backgroundColor="#3b96ce"
          ref={mapRef}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          containerClassName="map"
        />
      </div>
      <p>{mapFlag}</p>
    </div>
  );
};

export default UsaMapDemo;

import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = { oneFlag: false };
  }
  componentDidMount() {
    this.setState({ oneFlag: true });
  }
  render() {
    return (
      <div>
        <h2>World Map</h2>
        <div style={{ width: 800, height: 400 }}>
          {
            <VectorMap
              map={"world_mill"}
              backgroundColor="transparent"
              ref="map"
              containerStyle={{
                width: "100%",
                height: "100%",
              }}
              containerClassName="map"
              regionStyle={{
                initial: {
                  fill: "#7787",
                  "fill-opacity": 0.9,
                  stroke: "none",
                  "stroke-width": 0,
                  "stroke-opacity": 0,
                },
                hover: {
                  fill: "#763452",
                  "fill-opacity": 0.9,
                },
              }}
            />
          }
        </div>
        <p>{this.state.oneFlag}</p>
      </div>
    );
  }
}

export default WorldMap;

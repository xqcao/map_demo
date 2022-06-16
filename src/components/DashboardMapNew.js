import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";

var _ = require("lodash");

const allStates = [
  "US-VA",
  "US-PA",
  "US-TN",
  "US-WV",
  "US-NV",
  "US-TX",
  "US-NH",
  "US-NY",
  "US-HI",
  "US-VT",
  "US-NM",
  "US-NC",
  "US-ND",
  "US-NE",
  "US-LA",
  "US-SD",
  "US-DC",
  "US-DE",
  "US-FL",
  "US-CT",
  "US-WA",
  "US-KS",
  "US-WI",
  "US-OR",
  "US-KY",
  "US-ME",
  "US-OH",
  "US-OK",
  "US-ID",
  "US-WY",
  "US-UT",
  "US-IN",
  "US-IL",
  "US-AK",
  "US-NJ",
  "US-CO",
  "US-MD",
  "US-MA",
  "US-AL",
  "US-MO",
  "US-MN",
  "US-CA",
  "US-IA",
  "US-MI",
  "US-GA",
  "US-AZ",
  "US-MT",
  "US-MS",
  "US-SC",
  "US-RI",
  "US-AR",
];

export default class DashboardMapNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: null,
      activeStateData: null,
      inactiveStateData: null,
      minCount: 0,
      maxCount: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.updateValues();
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (_.isEqual(props.mapData, state.mapData) === false) {
      return {
        mapData: props.mapData,
        minCount: props.minCount,
        maxCount: props.maxCount,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  updateValues() {
    let activeStateData = {};
    if (this.state.mapData != null) {
      this.state.mapData
        .filter((each) => each.activeFlag === 1)
        .forEach((each) => {
          activeStateData["US-" + each.stateName] = each.total;
        });
    }

    let inactiveStateData = {};
    if (this.state.mapData != null) {
      this.state.mapData
        .filter((each) => each.activeFlag === 0)
        .map((each, idx) => {
          inactiveStateData["US-" + each.stateName] =
            each.total + " 000 " + idx;
        });
    }
    activeStateData = this.fillEmptyState(activeStateData, inactiveStateData);

    console.log(activeStateData);
    console.log(inactiveStateData);

    this.setState({
      inactiveStateData: inactiveStateData,
      activeStateData: activeStateData,
    });
  }

  fillEmptyState(active, inactive) {
    allStates.map((each) => {
      // console.log(each)
      if (
        active.hasOwnProperty(each) === false &&
        inactive.hasOwnProperty(each) === false
      ) {
        active[each] = 0;
      }
    });
    return active;
  }

  onToolTipShow = (e, el, code) => {
    // console.log(code, e, el)
    let allData = {
      ...this.state.activeStateData,
      ...this.state.inactiveStateData,
    };
    console.log(allData);
    let content = "State: " + el.html() + "<br/>Count: " + allData[code];
    return el.html(content);
  };

  render() {
    const { activeStateData, inactiveStateData } = this.state;
    return (
      <div>
        <div style={{ width: 800, height: 400 }}>
          {
            <VectorMap
              map={"us_aea"}
              backgroundColor="transparent"
              ref="map"
              containerStyle={{
                width: "100%",
                height: "100%",
              }}
              containerClassName="map"
              onRegionTipShow={this.onToolTipShow}
              regionStyle={{
                initial: {
                  fill: "#e4e4e4",
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
              series={{
                regions: [
                  {
                    values: activeStateData,
                    scale: ["#d3d3d3", "#301934"],
                    normalizeFunction: "polynomial",
                    legend: {
                      horizontal: false,
                      vertical: true,
                      title: "Count",
                    },
                  },
                  {
                    values: inactiveStateData,
                    scale: ["#DDDDDD"],
                    normalizeFunction: "polynomial",
                  },
                ],
              }}
            />
          }
        </div>
      </div>
    );
  }
}

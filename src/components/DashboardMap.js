import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";

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

const allData = {
  "US-VA": 100,
  "US-PA": 150,
  "US-TN": 200,
  "US-WV": 250,
  "US-NV": 300,
  "US-TX": 350,
  "US-NH": 400,
  "US-NY": 450,
  "US-HI": 500,
  "US-VT": 550,
  "US-NM": 600,
  "US-NC": 650,
  "US-ND": 700,
  "US-NE": 750,
  "US-LA": 800,
  "US-SD": 850,
  "US-DC": 900,
  "US-DE": 950,
  "US-FL": 1000,
  "US-CT": 1050,
  "US-WA": 1100,
  "US-KS": 1150,
  "US-WI": 1200,
  "US-OR": 1250,
  "US-KY": 1300,
  "US-ME": 1350,
  "US-OH": 1400,
  "US-OK": 1450,
  "US-ID": 1500,
  "US-WY": 1600,
  "US-UT": 1650,
  "US-IN": 1700,
  "US-IL": 1750,
  "US-AK": 1800,
  "US-NJ": 1850,
  "US-CO": 1900,
  "US-MD": 1950,
  "US-MA": 2000,
  "US-AL": 2050,
  "US-MO": 2100,
  "US-MN": 2150,
  "US-CA": 2200,
  "US-IA": 2250,
  "US-MI": 2300,
  "US-GA": 2350,
  "US-AZ": 0,
  "US-MT": 0,
  "US-MS": 0,
  "US-SC": 0,
  "US-RI": 0,
  "US-AR": 0,
};

const inActive = {
  "US-AZ": 123,
  "US-MT": 123,
  "US-MS": 123,
  "US-SC": 123,
  "US-RI": 123,
  "US-AR": 123,
};
export default class DashboardMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: this.props.mapData,
      activeStateData: null,
      inactiveStateData: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState(
      {
        activeStateData: this.props.activeData,
        inactiveStateData: this.props.inactiveData,
      },
      () => this.fillEmptyState()
    );
  }

  componentDidUpdate() {
    // this.setDataFromProps()
  }

  setDataFromProps() {
    let mapData = this.props.mapData;
    this.setState({ mapData: mapData });
  }

  fillEmptyState() {
    // let active = this.state.activeStateData
    // allStates.map(each => {
    //   active.for
    // })
    // active.forEach((each)=> {
    //   let key = Object.keys(each)[0]
    //   console.log(key)
    //   allStates.forEach((state) =>{
    //     if(state != key) {
    //       active[state] = 0
    //     }
    //   })
    // })
    // console.log(active)
  }

  onToolTipShow = (e, el, code) => {
    console.log(code, e, el);
    let content =
      el.html() +
      "State: " +
      el.html() +
      "<br/>Count: " +
      allData[code] +
      "<br/>Active: ";
    return el.html(content);
  };

  render() {
    return (
      <div>
        <div></div>
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
              regionLabelStyle={{
                initial: {
                  fill: "#B90E32",
                },
                hover: {
                  fill: "black",
                },
              }}
              labels={{
                regions: {
                  render: function (code) {
                    var doNotShow = ["US-RI", "US-DC", "US-DE", "US-MD"];

                    if (doNotShow.indexOf(code) === -1) {
                      return code.split("-")[1];
                    }
                  },
                  offsets: function (code) {
                    return {
                      CA: [-10, 10],
                      ID: [0, 40],
                      OK: [25, 0],
                      LA: [-20, 0],
                      FL: [45, 0],
                      KY: [10, 5],
                      VA: [15, 5],
                      MI: [30, 30],
                      AK: [50, -25],
                      HI: [25, 50],
                    }[code.split("-")[1]];
                  },
                },
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
                    values: allData,
                    scale: ["#80cbc4", "#004d40"],
                    normalizeFunction: "polynomial",
                    legend: {
                      horizontal: false,
                      vertical: true,
                      title: "Count",
                    },
                  },
                  {
                    values: allData,
                    scale: ["#CCCCCC"],
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

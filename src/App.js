import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Content from "./components/Content";
import UsaMapDemo from "./components/UsaMapDemo";
import Welcome from "./components/Welcome";
import DashboardMapNew from "./components/DashboardMapNew";
import DashboardMap from "./components/DashboardMap";
import NewMap from "./components/NewMap";
import WorldMap from "./components/WorldMap";
import WMap from "./components/WMap";

const routes = [
  { name: "welcome", url: "/", component: Welcome },
  { name: "about", url: "/about", component: About },
  { name: "content", url: "/content", component: Content },
  { name: "usa-map", url: "/usa", component: UsaMapDemo },
  { name: "updatemap", url: "/updatemap", component: DashboardMapNew },
  { name: "dashmap", url: "/dashmap", component: DashboardMap },
  { name: "newmap", url: "/newmap", component: NewMap },
  { name: "worlmap", url: "/worldmap", component: WorldMap },
  { name: "wmap", url: "/wmap", component: WMap },
];

function App() {
  return (
    <div className="App">
      <h2>React App</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "." + idx}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./javascript/Navbar";
import { useEffect, useState } from "react";
import MVEAPI from "./api";
import Routes from "./javascript/Routes";
import { BrowserRouter } from "react-router-dom";

// vaccine variable dictates how vaccines are shown/stored
// key = how it's stored in DB
// value = how it shows on the web-page
// covid = {covid: "COVID"}
const vaccines = {
  johnsonandjohnson: "Johnson & Johnson",
  astrazeneca: "AstraZeneca",
  pfizer: "Pfizer",
  moderna: "Moderna",
};

function App() {
  const tempStats = {
    pfizer: 1,
    astrazeneca: 1,
    moderna: 0.67,
    johnsonandjohnson: 0.5,
    covid: [
      {
        satisfied: "3",
        count: "1",
      },
      {
        satisfied: "4",
        count: "1",
      },
    ],
  };
  const [stats, setStats] = useState(tempStats);
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    async function getStats() {
      let stats = await MVEAPI.getStats();
      setStats(stats.data.stats);
    }
    getStats();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearchBy={setSearchBy} />
        <Routes
          searchBy={searchBy}
          vaccines={vaccines}
          stats={stats}
          search={true}
          setSearchBy={setSearchBy}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

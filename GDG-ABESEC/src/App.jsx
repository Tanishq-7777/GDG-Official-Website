import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import AchivementPage from "./pages/AchivementPage";
import ScrollToHash from "./components/ScrollToHash";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <ScrollToHash />

          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/achievement" element={<AchivementPage />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;

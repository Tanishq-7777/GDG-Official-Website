import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import AchivementPage from "./pages/AchivementPage";
import ContactPage from "./pages/ContactPage";

import ScrollToHash from "./components/ScrollToHash";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <ScrollToTop />
          <ScrollToHash />

          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/achievements" element={<AchivementPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;

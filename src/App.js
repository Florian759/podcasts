import { Routes, Route } from "react-router-dom";
import { Header } from "./components/shared/Header";
import PodcastsPage from "./pages/PodcastsPage.js";
import PodcastPage from "./pages/PodcastPage";
import { EpisodePage } from "./pages/EpisodePage";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<PodcastsPage />} />
        <Route path="/podcast/:podcastId" element={<PodcastPage />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EpisodePage />}
        />
      </Routes>
    </div>
  );
};

export default App;

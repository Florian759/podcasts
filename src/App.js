import './app.css';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/shared/Header';
import PodcastsPage from './pages/PodcastsPage.js';
import PodcastPage from './pages/PodcastPage';

const App = () => {

  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/" element={<PodcastsPage />} />
        <Route path="/podcast/:podcastId" element={<PodcastPage />} />
      </Routes>
    </div>
  );
}

export default App;

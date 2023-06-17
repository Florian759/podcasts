import './app.css';
import { Routes, Route } from "react-router-dom";
import PodcastPage from './pages/PodcastsPage.js';
import { Header } from './components/shared/Header';

const App = () => {

  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/" element={<PodcastPage />} />
      </Routes>
    </div>
  );
}

export default App;

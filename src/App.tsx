import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import BoxScore from './features/game/components/BoxScore';
import MatchScheduleTab from './features/game/components/MatchScheduleTab';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/regular/schedule" element={<MatchScheduleTab />} />
          <Route path="/game/regular/boxscore" element={<BoxScore />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

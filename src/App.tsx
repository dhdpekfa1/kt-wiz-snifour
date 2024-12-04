import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import BoxScoreTab from './features/game/components/BoxScoreTab';
import MatchScheduleTab from './features/game/components/MatchScheduleTab';
import HomePage from './pages/HomePage';
import CheerSong from './pages/player/CheerSong';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen bg-wiz-black flex flex-col items-center">
        <Header />
        <div className="w-[1200px]">
          <Routes>
            {/* 메인 */}
            <Route path="/" element={<HomePage />} />

            {/* Game */}
            <Route
              path="/game/regular/schedule"
              element={<MatchScheduleTab />}
            />
            <Route path="/game/regular/boxscore" element={<BoxScoreTab />} />

            {/* Player */}
            <Route path="/player/song" element={<CheerSong />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

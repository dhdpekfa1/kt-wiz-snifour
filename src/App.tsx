import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import { BoxScoreTab, MatchScheduleTab, WatchPointTab } from './features/game';
import HomePage from './pages/HomePage';
import WallpaperPage from './pages/ktwiz/WallpaperPage';
import CheerSongPage from './pages/player/CheerSongPage';
import ParkIntroPage from './pages/wizPark/ParkIntroPage';
import ParkLocationPage from './pages/wizPark/ParkLocationPage';
import ParkingPage from './pages/wizPark/ParkingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen bg-wiz-black flex flex-col items-center">
        <Header />
        <div className="w-[1200px] mt-28">
          <Routes>
            {/* 메인 */}
            <Route path="/" element={<HomePage />} />

            {/* KT Wiz */}
            <Route path="/ktwiz/wallpaper" element={<WallpaperPage />} />

            {/* Wiz Park */}
            <Route path="/wizpark/intro" element={<ParkIntroPage />} />
            <Route path="/wizpark/location" element={<ParkLocationPage />} />
            <Route path="/wizpark/parking" element={<ParkingPage />} />

            {/* Game */}
            <Route
              path="/game/regular/schedule"
              element={<MatchScheduleTab />}
            />
            <Route path="/game/regular/boxscore" element={<BoxScoreTab />} />
            <Route
              path="/game/regular/watchPoint"
              element={<WatchPointTab />}
            />

            {/* Player */}
            <Route path="/player/song" element={<CheerSongPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

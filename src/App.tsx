import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/media/FirstPitch';
import HighlightPage from './pages/media/Highlight';
import NewsPage from './pages/media/News';
import PhotoPage from './pages/media/Photo';
import StoryPage from './pages/media/Story';

import NewsDetailPage from './pages/media/id/NewsDetail';

import WallpaperPage from './pages/ktwiz/WallpaperPage';
import CheerSongPage from './pages/player/CheerSongPage';
import ParkIntroPage from './pages/wizPark/ParkIntroPage';
import ParkLocationPage from './pages/wizPark/ParkLocationPage';
import ParkingPage from './pages/wizPark/ParkingPage';

import NotFoundPage from './pages/NotFoundPage';
import RegularGamePage from './pages/game/RegularGamePage';
import FirstPitchDetailPage from './pages/media/id/FirstPitchDetail';
import PressDetailPage from './pages/media/id/PressDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-wiz-black flex flex-col items-center">
        <Header />
        {/*
          데스크탑 -> 1240px (padding 포함, 실제컨텐츠 1200px),
          모바일 -> 100%
        */}
        <div className="w-full mt-28 px-5 lg:max-w-[1240px]">
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
              element={<RegularGamePage />}
            />
            <Route
              path="/game/regular/boxscore"
              element={<RegularGamePage />}
            />
            <Route
              path="/game/regular/watchPoint"
              element={<RegularGamePage />}
            />

            {/* Media */}
            <Route path="/media/wiznews" element={<NewsPage />} />
            <Route path="/media/wizpress" element={<NewsPage />} />
            <Route path="/media/wizstory" element={<StoryPage />} />
            <Route path="/media/photos/:id" element={<PhotoPage />} />
            <Route path="/media/firstpitch" element={<PlayerPage />} />
            <Route path="/media/highlight" element={<HighlightPage />} />

            {/* Media 상세 */}
            <Route path="/media/wiznews/:id" element={<NewsDetailPage />} />
            <Route path="/media/wizpress/:id" element={<PressDetailPage />} />
            <Route
              path="/media/firstpitch/:id"
              element={<FirstPitchDetailPage />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />

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

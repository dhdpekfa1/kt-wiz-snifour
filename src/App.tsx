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
import RegularGamePage from './pages/game/regular/RegularGamePage';
import PressDetailPage from './pages/media/id/PressDetail';
import CheerleaderPage from './pages/player/CheerleaderPage';
import CoachPage from './pages/player/CoachPage';
import CoachDetailPage from './pages/player/detail/CoachDetailPage';
import PitcherPage from './pages/player/PitcherPage';
import PlayerDetailPage from './pages/player/detail/PlayerDetailPage';
import BatterPage from './pages/player/BatterPage';
import ScrollToTop from './features/common/ScrollToTop';
import IksanStadiumPage from './pages/wizPark/IksanStadiumPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full bg-wiz-black flex flex-col items-center relative">
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
            <Route path="/wizpark/iksan" element={<IksanStadiumPage />} />

            {/* Game */}
            <Route path="/game/regular/*" element={<RegularGamePage />} />

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

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />

            {/* Player */}
            <Route path="/player/coach" element={<CoachPage />} />
            <Route path="/player/pitcher" element={<PitcherPage />} />
            <Route path="/player/catcher" element={<BatterPage />} />
            <Route path="/player/infielder" element={<BatterPage />} />
            <Route path="/player/outfielder" element={<BatterPage />} />
            <Route path="/player/song" element={<CheerSongPage />} />
            <Route path="/player/cheer" element={<CheerleaderPage />} />

            {/* Player 상세 페이지 경로 */}
            <Route path="/player/coach/detail" element={<CoachDetailPage />} />
            <Route
              path="/player/pitcher/detail"
              element={<PlayerDetailPage />}
            />
            <Route
              path="/player/catcher/detail"
              element={<PlayerDetailPage />}
            />
          </Routes>
        </div>
        <Footer />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="w-12 h-12 rounded-full bg-white border fixed bottom-2 left-2 flex items-center justify-center text-center cursor-pointer text-sm font-semibold"
        >
          TOP▲
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

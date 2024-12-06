import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import BoxScoreTab from './features/game/components/BoxScoreTab';
import MatchScheduleTab from './features/game/components/MatchScheduleTab';
import HomePage from './pages/HomePage';

import NotFoundPage from './pages/NotFound';
import PlayerPage from './pages/media/FirstPitch';
import HighlightPage from './pages/media/Highlight';
import NewsPage from './pages/media/News';
import PhotoPage from './pages/media/Photo';
import StoryPage from './pages/media/Story';

import ParkIntro from './pages/wizPark/ParkIntro';
import ParkLocation from './pages/wizPark/ParkLocation';

import CheerSong from './pages/player/CheerSong';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-wiz-black flex flex-col items-center">
        <Header />
        {/*
          데스크탑 -> 1240px (padding 포함, 실제컨텐츠 1200px),
          모바일 -> 100%
        */}
        <div className="w-full px-5 lg:max-w-[1240px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/game/regular/schedule"
              element={<MatchScheduleTab />}
            />
            <Route path="/game/regular/boxscore" element={<BoxScoreTab />} />
            <Route path="/wizpark/intro" element={<ParkIntro />} />
            <Route path="/wizpark/location" element={<ParkLocation />} />
          </Routes>
          <div className="w-[1200px] mt-28">
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

              {/* Media */}
              <Route path="/media/wiznews" element={<NewsPage />} />
              <Route path="/media/wizpress" element={<NewsPage />} />
              <Route path="/media/wizstory" element={<StoryPage />} />
              <Route path="/media/photos/:id" element={<PhotoPage />} />
              <Route path="/media/firstpitch" element={<PlayerPage />} />
              <Route path="/media/highlight" element={<HighlightPage />} />
              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

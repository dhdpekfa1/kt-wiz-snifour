import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './features/common/Footer';
import Header from './features/common/Header';
import HomePage from './pages/HomePage';
import ParkIntro from './pages/wizPark/ParkIntro';

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wizpark/intro" element={<ParkIntro />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

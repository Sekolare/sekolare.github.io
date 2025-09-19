import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { QuantoTiAmo } from './pages/QuantoTiAmo';
import { QuantoSeiImportante } from './pages/QuantoSeiImportante';
import { CosaSignifichi } from './pages/CosaSignifichi';
import './styles/globals.scss';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quanto-ti-amo" element={<QuantoTiAmo />} />
            <Route path="/quanto-sei-importante" element={<QuantoSeiImportante />} />
            <Route path="/cosa-significhi" element={<CosaSignifichi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

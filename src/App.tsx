import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "Denis V. | Cloud & Security Engineer";
  }, []);

  return (
    <div className="app-container">
      {/* Fixed logo container with video and name */}
      <div className="video-logo">
        <video autoPlay loop muted playsInline>
          <source src="/assets/adqwea_seamless.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        <BackgroundAnimation />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
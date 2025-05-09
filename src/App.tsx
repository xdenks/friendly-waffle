import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Denis V. | Cloud & Security Engineer";
  }, []);
  
  return (
    <div className="app-container">
      {/* Fixed logo container outside of scrollable content */}
      <div className="video-logo">
        <video autoPlay loop muted playsInline>
          <source src="/assets/adqwea_seamless.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="logo-name">Denis V.</div>
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
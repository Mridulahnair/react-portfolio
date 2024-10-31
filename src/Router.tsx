import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AboutPage } from './pages/About.page';
import { WorkPage } from './pages/Work.page';
import { BlogPage } from './pages/Blog.page';
import { GalleryPage } from './pages/Gallery.page';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

export function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
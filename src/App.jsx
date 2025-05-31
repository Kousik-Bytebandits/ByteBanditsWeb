import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import SvgLoader from './utils/SvgLoader';
import { useEffect, useState } from 'react';
import Scroll from './utils/Scroll';
import ErrorPage from './pages/ErrorPage';
import BlogsContentPage from './pages/BlogsContentPage';
import CareerPage from './pages/CareerPage';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      window.scrollTo(0, 0);

      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }, 5000);
  
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <SvgLoader />;
  }

  return (
    <div className='fade-in'>
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path='/blogs' element={<BlogsContentPage/>}/>
        <Route path='/career' element={<CareerPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

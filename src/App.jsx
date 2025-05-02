import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import SvgLoader from './SvgLoader';
import { useEffect, useState } from 'react';
import Scroll from './Scroll';
import ErrorPage from './ErrorPage';

const RouteWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [location.pathname]); 

  if (loading) return <SvgLoader />;

  return (
    <div className="fade-in">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Scroll />
      <RouteWrapper />
    </Router>
  );
}

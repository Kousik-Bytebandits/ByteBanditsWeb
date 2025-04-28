import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import SvgLoader from './SvgLoader';
import { useEffect, useState } from 'react';
import Scroll from './Scroll';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate load delay
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SvgLoader />;
  }

  return (
   
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </Router>
  );
}

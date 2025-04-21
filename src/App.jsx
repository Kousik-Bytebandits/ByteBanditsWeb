import './App.css';
import Home from './Home'
import SvgLoader from './SvgLoader'
import { useEffect, useState } from 'react';
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate load delay
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <> 
    {loading ? (
      <SvgLoader />
    ) : (<div>
      <Home/>
   </div>)}
   
   </>
    
  
  );
}

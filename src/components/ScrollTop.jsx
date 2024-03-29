import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Este componente tiene como objetivo mandar al inicio cuando se renderizan los componentes en el app.jsx en este caso
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;

/**
 * The ScrollToTop component in JavaScript React scrolls the window to the top when components are
 * rendered in the app.jsx file.
 * @returns The ScrollToTop component is returning null.
 */
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

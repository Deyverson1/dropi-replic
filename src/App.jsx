import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alies from './dashboard/Alies';
import Footer from './dashboard/Footer';
import Cards from './dashboard/Cards';
import Header from './dashboard/Header';
import WhyDropi from './dashboard/WhyDropi';
import Video from './dashboard/Video';
import AboutUs from './dashboard/AboutUs';
import Panels from './dashboard/Panels';
import RegisterCard from './components/Register';
import WhatsApp from './components/WhatsApp';
import ScrollToTop from './components/ScrollTop';
import Contact from './pages/Contact';
import Dropicard from './pages/Dropicard';
import LogIn from './pages/LogIn'
// import Proveedores from './pages/Suppliers';
import Academy from './pages/Academy';
import SuppliersSolutions from './pages/SuppliersSolutions';
import DropshipperSolutions from './pages/DropshipperSolutions';
import BrandSolutions from './pages/BrandSolutions';
import Privacy from './pages/Privacy';
import RegisterPage from './pages/Register';
import WorkWhitUs from './pages/WorkWhitUs';
function App() {
  const titleRegister = 'Regístrate'
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<>
          <Header color='#5b5b5b' />
          <Video />
          <Cards />
          <AboutUs />
          <WhyDropi />
          <Panels />
          <Alies />
          <RegisterCard background='#fff' title={titleRegister} titleColor='#EC6F2D' />
          <WhatsApp />
        </>} />
        <Route path='/Dropicard/' element={<Dropicard />} />
        <Route path='/Footer/' element={<Footer />} />
        <Route path='/Contact/' element={<Contact />} />
        <Route path='/Iniciar-sesion/' element={<LogIn />} />
        {/* <Route path='/proveedores-premium/' element={<Proveedores />} /> */}
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/dropi-academy' element={<Academy />} />
        <Route path='/soluciones-para-proveedores/' element={<SuppliersSolutions />} />
        <Route path='/soluciones-para-dropshippers/' element={<DropshipperSolutions />} />
        <Route path='/soluciones-para-marca-propia/' element={<BrandSolutions />} />
        <Route path='/politica-privacidad/' element={<Privacy />} />
        <Route path='/trabaja-con-nosotros/' element={<WorkWhitUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
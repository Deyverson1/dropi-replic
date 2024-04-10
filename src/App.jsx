import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alies from './dashboard/Alies/Alies';
import Footer from './dashboard/Footer/Footer';
import Header from './dashboard/Header/Header';
import Contact from './pages/Contact/Contact';
import Dropicard from './pages/Dropicard/Dropicard';
import RegisterCard from './components/Register/Register';
import WhatsApp from './components/WhatsApp/WhatsApp';
import LogIn from './pages/LogIn/LogIn'
import Proveedores from './pages/Proveedores/Suppliers';
import Academy from './pages/DropiAcademy/Academy';
import ScrollToTop from './components/ScrollTop';
import SuppliersSolutions from './pages/SuppliersSolutions/SuppliersSolutions';
import DropshipperSolutions from './pages/DropshipperSolutions/DropshipperSolutions';
import BrandSolutions from './pages/BrandSolutions/BrandSolutions';
import Privacy from './pages/Privacy/Privacy';
import Video from './dashboard/Video/Video';
import Cards from './dashboard/Cards/Cards';
import AboutUs from './dashboard/About/AboutUs';
import WhyDropi from './dashboard/WhyUs/WhyDropi';
import Panels from './dashboard/Panels/Panels';
import RegisterPage from './pages/Register/Register';
import WorkWhitUs from './pages/WorkWhitUs/WorkWhitUs';
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
        <Route path='/proveedores-premium/' element={<Proveedores />} />
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
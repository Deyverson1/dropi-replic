import './App.css'
import Alies from './components/Alies/Alies';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Dropicard from './components/SubComponents/Dropicard/Dropicard';
import Contact from './components/SubComponents/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IniciarSesion from './components/SubComponents/Iniciar sesion/IniciarSesion'
import Proveedores from './components/SubComponents/Proveedores/Proveedores';
import Registrate from './components/SubComponents/Registrate/Registrate';
import Academy from './components/DropiAcademy/Academy';
import ScrollToTop from './components/ScrollTop';
function App() {
  const titleRegister = 'Regístrate'
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<>
          <Header color='#5b5b5b' />
          <Main />
          <Alies />
          <Register background='#fff' title={titleRegister} titleColor='#EC6F2D' />
          <WhatsApp />
        </>} />
        <Route path='/Dropicard/' element={<Dropicard />} />
        <Route path='/Footer/' element={<Footer />} />
        <Route path='/Contact/' element={<Contact />} />
        <Route path='/Iniciar-sesion/' element={<IniciarSesion />} />
        <Route path='/proveedores-premium/' element={<Proveedores />} />
        <Route path='/Register' element={<Registrate/>} />
        <Route path='/dropi-academy' element={<Academy/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
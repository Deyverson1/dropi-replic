import './App.css'
import Alies from './components/Alies/Alies';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Dropicard from './components/SubComponents/Dropicard/Dropicard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <>
          <Header />
          <Main />
          <Alies/>
          <Register />
          <Footer />
          <WhatsApp/>
          </>} />  
        <Route path='/dropicard' element={<Dropicard/>}/>
        <Route path='/footer' element={<Footer/>}/>  
      </Routes>
    </Router>
  )
}

export default App;
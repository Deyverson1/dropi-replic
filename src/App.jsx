import './App.css'
import Alies from './components/Alies/Alies';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Alies/>
      <Register />
      <Footer />
      <WhatsApp/>
    </>
   
  )
}

export default App;
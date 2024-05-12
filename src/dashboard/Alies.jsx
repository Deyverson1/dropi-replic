import '../styles/dashboard/Alies.css'
import { Link } from 'react-router-dom'
import CarouselDashboard from './Carousel'
import ContactAlies from './ContactAlies'
export default function Alies() {
  return (
    <section>
      <section>
        <CarouselDashboard />
      </section>
      <section >
        <div className='alies-cap-container'>
          <h3 className='alies-cap-text'>Potencia tus habilidades</h3>
          <Link to={'/dropi-academy'}><button className='alies-cap-button'>Capacítate</button></Link>
        </div>
      </section>
      <div className='alies-container-video'>
        <iframe className='alies-video' src="https://www.youtube-nocookie.com/embed/-hgeFmoEhCo?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdropi.co&widgetid=1" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;' title='TOUR PLATAFORMA DROPI'></iframe>
      </div>

      <ContactAlies button={'Contactanos'} />
      <div className='alies-container-proveedores'>
        <h3 className='alies-container-proveedores-text'>Conoce nuestros proveedores  verificados</h3>
        <Link to={'proveedores-premium/'}><button className='alies-container-proveedores-button'>Proveedores</button></Link>
      </div>
    </section>
  )
}
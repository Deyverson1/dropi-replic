/* The code you provided is a React component named `ContactAlies`. Here's a breakdown of what it does: */
import { Link } from 'react-router-dom'
import '../styles/dashboard/Alies.css'
export default function ContactAlies({ button }) {
  return (
    <section className='alies-contact-container'>
      <div>
        <img className='alies-contact-image' src="https://dropi.co/wp-content/uploads/2023/06/mapa-latam-FINAL.png" alt="" />
      </div>
      <div className='alies-contact-text-field'>
        <h2>Expande</h2>
        <h2>Tu negocio</h2>
        <h5>Llévalo a <span><em>Otro <strong> nivel</strong></em></span></h5>
        <h6>Más de 700 mil órdenes mensuales en Latam</h6>
        <Link to="/contact/"><button>{button}</button></Link>
      </div>
    </section>
  )
}
import './Footer.css'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer(){
    return(
        <footer className='footer-container'>
            <main className='footer-links'>
            <img className='footer-image' src="https://dropi.co/wp-content/uploads/2023/05/logo_dropi_light.png" alt="" />
            <section className='links-container'>
            <div className='footer-links-us'>
                <Link to="/contact/">Contacto</Link>
                <a href="#">Capacitaciones Dropi</a>
                <a href="#">Proveedores Premiun</a>
            </div>
            <div className='footer-links-terms'>
                <a href="#">Privacidad</a>
                <a href="#">Términos y Condiciones</a>
            </div>
            <div className='footer-links-contact'>
                <a href="#">(+57) 321 8379821</a>
                <a href="#">comercial@dropi.co</a>
                <a href="#">Trabaja con Nosotros</a>
            </div>
            </section>
            </main>
           <div className='footer-final-section'>
                <div>
                    <p className='footer-final-text'>© DROPI | TODOS LOS DERECHOS RESERVADOS | 2023</p>
                </div>
                <div className='footer-social-media'>
                    <a href="https://www.facebook.com/dropi.oficial" target='blank'> <FontAwesomeIcon icon={faFacebook} size='lg' /></a>
                    <a href="https://www.youtube.com/@dropilatam" target='blank'> <FontAwesomeIcon icon={faYoutube}  size='lg'/></a>
                    <a href="https://www.instagram.com/dropi.co/" target='blank'> <FontAwesomeIcon icon={faInstagram}  size='lg'/></a>
                    <a href="https://twitter.com/dropilatam" target='blank'> <FontAwesomeIcon icon={faTwitter}  size='lg'/></a>
                    <a href="https://www.linkedin.com/in/dropi-latam-19328a237/" target='blank'> <FontAwesomeIcon icon={faLinkedin}  size='lg'/></a>
                    <a href="https://www.tiktok.com/@dropi.latam" target='blank'> <FontAwesomeIcon icon={faTiktok}  size='lg'/></a>
                </div>
           </div>
        </footer>
    )
}

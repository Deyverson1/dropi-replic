import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='navigation-header' role='banner'>
            <div className='navigation-container'>
                <Link to="/">
                <img className='navigation-image' src="/img/cropped-DROPI-LOGO-ICON.png" alt="Dropi" />
                <div className='navigation-icon-container'>
                    <FontAwesomeIcon className='navigation-icon' icon={faBars} size='lg'/>
                </div>
                </Link>
                
                <div className='navigation-links-container'>
                    <Link to="/dropicard/">Dropicard</Link>
                    <a href="#">¿Qué perfil eres?</a>
                    <a href="#">Proveedores</a>
                    <a href="#">Iniciar sesión</a>
                    <button className='navigation-button'>Registrate</button>
                </div>
            </div>
        </header>
    );
}

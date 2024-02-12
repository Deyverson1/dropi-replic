import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
    const dataHeader = [{ title: 'Dropicard', to: '/dropicard/', type: Link }, { title: '¿Qué perfil eres?', to: '#Panels', }, { title: 'Proveedores', to: '/#/' }, { title: 'Iniciar sesión', to: '/#/' },]
    return (
        <header className='navigation-header' role='banner'>
            <div className='navigation-container'>
                <Link to="/">
                    <img className='navigation-image' src="/img/cropped-DROPI-LOGO-ICON.png" alt="Dropi" />
                    <div className='navigation-icon-container'>
                        <FontAwesomeIcon className='navigation-icon' icon={faBars} size='lg' />
                    </div>
                </Link>
                <div className='navigation-links-container'>
                    {dataHeader.map((dato, index) => (
                        <Link key={index} to={dato.to}>{dato.title}</Link>
                    ))}
                    <button className='navigation-button'>Registrate</button>
                </div>

            </div>
        </header>
    );
}

import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '../icons/Menu.jsx'
import { useState } from 'react';
export default function Header(props) {
    const [activeNav, setActiveNav] = useState(false)
    function handleClick() {
        console.log('Click')
    }

    const { color } = props
    const dataHeader = [{ title: 'Dropicard', to: '/dropicard/', type: Link }, { title: '¿Qué perfil eres?', to: '#Panels', background: '#55595c', color: '#fff' }, { title: 'Proveedores', to: '/proveedores-premium/' }, { title: 'Iniciar sesión', to: '/iniciar-sesion/' },]
    return (
        <header className='navigation-header' role='banner'>
            <div className='navigation-container'>
                <Link to="/">
                    <img className='navigation-image' src="/img/cropped-DROPI-LOGO-ICON.png" alt="Dropi" />
                </Link>
                <div className='navigation-icon-container' onClick={handleClick}>
                    <MenuIcon />
                </div>
                <div className='navigation-links-container'>
                    {dataHeader.map((dato, index) => (
                        <Link key={index} to={dato.to} style={{ color: color }}>{dato.title}</Link>
                    ))}
                    <button className='navigation-button'>Registrate</button>
                </div>

            </div>
            <div className='nav-mobile-container'>
                <ul className='nav-mobile'>
                    {dataHeader.map((dato, index) => (
                        <Link key={index}> <li className='li-nav-mobile' style={{background: dato.background, color: dato.color}}>{dato.title}</li>
                        </Link>
                    ))}
                    <Link><li className='li-nav-mobile' style={{background: '#eC6f2d', color: "#fff"}}>Registrate</li></Link>
                </ul>
            </div>
        </header>
    );
}

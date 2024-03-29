import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '../../icons/Menu'
export default function Header(props) {
    const [activeNav, setActiveNav] = useState(false)
    function handleClick() {
        setActiveNav(!activeNav)
    }

    const { color } = props
    const dataHeader = [{ title: 'Dropicard', to: '/Dropicard/', type: 'Link' }, { title: '¿Qué perfil eres?', to: '/#Panels', background: '#55595c', color: '#fff' }, { title: 'Proveedores', to: '/Proveedores-premium/', type: 'Link' }, { title: 'Iniciar sesión', to: '/Iniciar-sesion/', type: 'Link' }, ]
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
                        <article key={index}>
                            {
                                dato.type == 'Link' && (
                                    <Link to={dato.to} className='links-header'>{dato.title}</Link>
                                )
                            }
                            {
                                dato.type !== 'Link' && (
                                    <a href="/#Panels">{dato.title}</a>
                                )
                            }

                        </article>
                    ))}
                    <Link to={'/Register'} className='navigation-button'>Regístrate</Link>
                </div>
            </div>
            {activeNav && (
                <div className='nav-mobile-container'>
                    <ul className='nav-mobile'>
                        {dataHeader.map((dato, index) => (
                            <article key={index}>
                                {dato.type == 'Link' && (
                                    <Link to={dato.to} > <li className='li-nav-mobile' style={{ background: dato.background, color: dato.color }}>{dato.title}</li></Link>
                                )}
                                {dato.type !== 'Link' && (
                                    <a href="/#Panels" style={{ color: color }}><li className='li-nav-mobile' style={{ background: dato.background, color: dato.color }}>{dato.title}</li></a>
                                )}
                            </article>
                        ))}
                        <Link to={'/Register'}><li className='li-nav-mobile' style={{ background: '#eC6f2d', color: "#fff" }}>Registrate</li></Link>
                    </ul>
                </div>
            )}
        </header>
    );
}

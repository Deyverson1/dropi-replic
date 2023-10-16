import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <header className='navigation-header' role='banner'>
            <div className='navigation-container'>
                <img className='navigation-image' src="/img/cropped-DROPI-LOGO-ICON.png" alt="Dropi" />
                <div className='navigation-icon-container'>
                    <FontAwesomeIcon className='navigation-icon' icon={faBars} size='lg'/>
                </div>
            </div>
        </header>
    );
}

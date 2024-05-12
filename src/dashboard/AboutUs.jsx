import '../styles/dashboard/AboutUs.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AboutUs(){
    return (
        <main className='about-us-main'>
            <div className='about-us-container'>
                <img className='about-us-image' src="/dashboard/que-hacemos.png" alt="" />
               <div className='list-container'>
                <h4 className='about-us-tittle'>¿Qué <span className='about-us-span'>Hacemos?</span></h4>
                    <div className='list-about-us'>
                        <span className='icon-about-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}} /></span>
                        <p className='text-about-us'>Somos un <strong>aliado para los E-Commerce</strong></p>
                    </div>
                    <div className='list-about-us'>
                        <span className='icon-about-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-about-us'><strong>Automatizamos y optimizamos</strong>  por completo la <strong>Logística de tus envíos</strong> desde <strong>la compra hasta la post-entrega</strong></p>
                    </div>
                    <div className='list-about-us'>
                        <span className='icon-about-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-about-us'>Nos adaptamos a las <strong>necesidades de tu negocio</strong></p>
                    </div>
               </div>
            </div>
        </main>
    )
}
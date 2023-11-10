import './WhyDropi.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WhyDropi(){
    return (
        <main className='why-us-main'>
            <div className='why-us-container'>
                <img className='why-us-image' src="https://dropi.co/wp-content/uploads/2023/05/por-que-dropi-768x660.png" alt="" />
               <div className='list-container'>
                <h4 className='why-us-tittle'>¿Por Qué <span className='why-us-span'>Dropi?</span></h4>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}} /></span>
                        <p className='text-why-us'>Tienes tu <strong> dinero 24 horas</strong></p>
                    </div>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-why-us'>Tenemos las <strong>mejores tarifas del mercado</strong></p>
                    </div>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-why-us'>Somos una <strong>plataforma amigable y fácil de usar</strong></p>
                    </div>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-why-us'>Te damos <strong>datos y métricas </strong> avanzadas de tu negocio</p>
                    </div>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-why-us'>Puedes <strong>gestionar tu inventario </strong> fácilmente</p>
                    </div>
                    <div className='list-why-us'>
                        <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d"}}/></span>
                        <p className='text-why-us'> <strong>Automatizamos </strong> procesos</p>
                    </div>
               </div>
            </div> 
        </main>
    )
}
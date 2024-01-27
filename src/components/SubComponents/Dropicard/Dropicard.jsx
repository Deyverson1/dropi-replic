import "./Dropicard.css"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default function Dropicard(){
    return (
        <>
            <Header/>
            <div className='dropicard-container'>
                <img className='dropicard-image' src="https://dropi.co/wp-content/uploads/2023/08/dropicard.png" alt="" />
               <div className='list-container-dropicard'>
                <button className="dropiButton">dropicard</button>
                    <div className='list-dropicard'>
                        <p className='text-dropicard'>NUESTRA TARJETA DE CRÉDITO ES UNA NUEVA HERRAMIENTA FINANCIERA, DROPICARD ROMPE LA BRECHA DE AQUELLOS QUE NO ESTÁN BANCARIZADOS Y QUIEREN AGILIZAR SUS PROCESOS DE TRANSFERENCIAS DE WALLET A UN BIEN FINAL</p>
                    </div>
               </div>
            </div>
            <button className="beneficsButton">Beneficios</button>
            <section className="list-container-Dropi">
                <ul>
                    <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Simplifica el proceso de activación de tus anuncios de campañas.</p></div></li>
                    <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Crea tantas tarjetas como necesites.</p></div></li>
                    <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Recarga tu Dropi Card con el saldo de tu Wallet en un solo clic.</p></div></li>
                   
                </ul>
                <ul>
                     <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Puedes hacer múltiples movimientos en un mismo día.</p></div></li>
                    <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Tu tarjeta aliada con VISA.</p></div></li>
                    <li> <div className="slider-card"><FontAwesomeIcon icon={faCheck} style={{color: "#ec6f2d", marginRight: ".5rem", paddingTop: ".3rem"}} /> <p className='text-list'>Compra online, sin límites.</p></div></li>
            
                </ul>
            </section>
            <section className="textFullContainer">
                <h2 className="textTitle">¿Qué podrás</h2>
                <div className="containerText">
                    <h3 className="textDropiCard">Encontrar?</h3>
                </div>
            </section>
            <div className="imageDiv">
                <img src="https://dropi.co/wp-content/uploads/2023/08/ICONOS-PAGINA-1536x412.png" alt="" />
            </div>
            <section className="secondTextFullContainer">
                <h2 className="secondTextTitle">Así de fácil</h2>
                <div className="secondContainerText">
                    <h3 className="secondTextDropi">La obtienes</h3>
                </div>
            </section>
            <div className="infographic">
                <img src="https://dropi.co/wp-content/uploads/2023/08/Infografia_Horizontal-2-1536x474.png" alt="" />
            </div>
            <section className="contactDropicard">
                <h2 className="contactDropicardtextTitle">¡DEJA LAS DUDAS ATRÁS,</h2>
                <span>COMUNÍCATE CON NOSOTROS!</span>
                <div className="contactDropicardcontainerText">
                    <Link to="https://api.whatsapp.com/send?phone=573218379821&text=Hola%20vengo%20de%20la%20Web%20y%20deseo%20saber%20m%C3%A1s%20sobre%20la%20capacitaci%C3%B3n%20de%20la%20plataforma!%20"><button className="contactDropicardtextDropiCard">CONTÁCTANOS</button></Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}
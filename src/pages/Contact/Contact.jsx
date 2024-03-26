import Header from '../../dashboard/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Contact.css"
export default function Contact(){
    return (
        <>
            <Header/>
            <section className="containerContact">
            <div className="contactContainerTitle">
                <h2 className="contactTitle">Contáctanos</h2>
            </div> 
            <div className="form-container">
                <label htmlFor="form-name">Nombre</label>
                <input type="text" placeholder="Nombres"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Número de contacto</label>
                <input type="number" placeholder="Teléfono de contacto"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Correo electrónico</label>
                <input type="email" placeholder="Correo electrónico de contacto"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Pais</label>
                <select type="text" placeholder="Colombia">
                    <option value="">Colombia</option>
                    <option value="">Panamá</option>
                    <option value="">México</option>
                    <option value="">Chile</option>
                    <option value="">Ecuador</option>
                    <option value="">Peru</option>
                </select>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Mensaje</label>
                <textarea type="text" placeholder=""/>
            </div>
            <button className="buttonSend">Enviar</button>
            <Link target="blank" to="https://api.whatsapp.com/send/?phone=573218379821&text=Hola+vengo+de+la+Web+y+deseo+saber+m%C3%A1s+de+Dropi%21&type=phone_number&app_absent=0"><button className="buttonWhatsapp"><FontAwesomeIcon icon={faWhatsapp} size="lg" />Escríbenos</button></Link>
            </section>
        </>
       
    )
}
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import "./Contact.css"
export default function Contact(){
    return (
        <>
            <Header/>
            <section className="containerContact">
            <div className="contactContainerTitle">
                <h2 className="contactTitle">Contáctanos</h2>
            </div> <div className="form-container">
                <label htmlFor="form-name">Nombre</label>
                <input type="text" placeholder="Nombres"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Número de contacto</label>
                <input type="text" placeholder="Teléfono de contacto"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Correo electrónico</label>
                <input type="text" placeholder="Correo electrónico de contacto"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Pais</label>
                <input type="text" placeholder="Colombia"/>
            </div>
            <div className="form-container">
                <label htmlFor="form-name">Mensaje</label>
                <input type="text" placeholder="Nombres"/>
            </div>
           
            </section>
          
           
            <Footer/>
        </>
       
    )
}
import "./Dropicard.css"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
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
            <Footer/>
        </>
    )
}
import './Alies.css'
export default function Alies(){
    return(
        <section>
            <section>
                
            </section>
            <section >
                <div className='alies-cap-container'>
                    <h3 className='alies-cap-text'>Potencia tus habilidades</h3>
                    <button className='alies-cap-button'>Capacítate</button>
                </div>
            </section>
                <div className='alies-container-video'>
                    <iframe className='alies-video' src="https://www.youtube-nocookie.com/embed/-hgeFmoEhCo?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdropi.co&widgetid=1" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;' title='TOUR PLATAFORMA DROPI'></iframe>
                </div>
           
            <section className='alies-contact-container'>
                <div>
                    <img className='alies-contact-image' src="https://dropi.co/wp-content/uploads/2023/06/mapa-latam-FINAL.png" alt="" />
                </div>
                <div className='alies-contact-text-field'>
                    <h2>Expande</h2>
                    <h2>Tu negocio</h2>
                    <h5>Llévalo a <span><em>Otro <strong> nivel</strong></em></span></h5>
                    <h6>Más de 700 mil órdenes mensuales en Latam</h6>
                    <button>Contáctanos</button>
                </div>
            </section>
            <div className='alies-container-proveedores'> 
                <h3 className='alies-container-proveedores-text'>Conoce nuestros proveedores  verificados</h3>
                <button className='alies-container-proveedores-button'>Proveedores</button>
            </div>
        </section>
    )
}
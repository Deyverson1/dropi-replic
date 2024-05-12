import '../styles/pages/academy.css'
import Header from '../dashboard/Header';
export default function Academy() {
  const data = [
    { subTitle: 'Dropshipper', link: 'https://dropi.co/wp-content/uploads/2023/12/ICONO-DROPSHIPPER.png' },
    { subTitle: 'Proveedor', link: 'https://dropi.co/wp-content/uploads/2023/12/CAJA.png' },
    { subTitle: 'Emprendedor', link: 'https://dropi.co/wp-content/uploads/2023/12/MOVIL.png' },
    { subTitle: 'Integraciones', link: 'https://dropi.co/wp-content/uploads/2023/12/INTEGRACION-1.png' },
    { subTitle: 'Chatbot', link: 'https://dropi.co/wp-content/uploads/2023/12/CHATBOT.png' },
    { subTitle: 'Procesos Logísticos', link: 'https://dropi.co/wp-content/uploads/2023/12/PROCESOS-LOGISTICOS-1.png' },
  ]


  return (
    <section>
      <Header />
      <main className="academy-content">
        <video src="https://dropi.co/wp-content/uploads/2023/06/VIDEO-BANNER-Version2.mp4" autoPlay muted playsInline loop></video>
      </main>
      <article className="academy-cards-content">
        {data.map((dato, index) => (
          <main key={index} className="academy-card">
            <h1>Capacitación</h1>
            <h2>{dato.subTitle}</h2>
            <div>
              <img src={dato.link} alt="" />
            </div>
            <button>Leer más</button>
          </main>
        ))}
      </article>
    </section>
  )
}
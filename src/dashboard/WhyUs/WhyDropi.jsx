import './WhyDropi.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WhyDropi() {
  const data = [
    { title: 'Tienes tu', strong: 'dinero 24 horas', secondTitle: '' },
    { title: 'Tenemos las', strong: 'mejores tarifas del mercado', secondTitle: '' },
    { title: 'Somos una', strong: 'plataforma amigable y fácil de usar', secondTitle: '' },
    { title: 'Te damos', strong: 'datos y métricas', secondTitle: 'avanzadas de tu negocio' },
    { title: 'Puedes', strong: 'gestionar tu inventario', secondTitle: 'fácilmente' },
    { title: '', strong: 'Automatizamos', secondTitle: 'procesos' },
  ]
  return (
    <main className='why-us-main'>
      <div className='why-us-container'>
        <img className='why-us-image' src="https://dropi.co/wp-content/uploads/2023/05/por-que-dropi-768x660.png" alt="" />
        <div className='list-container'>
          <h4 className='why-us-tittle'>¿Por Qué <span className='why-us-span'>Dropi?</span></h4>
          {data.map(({ title, strong, secondTitle }, index) => (
            <div key={index} className='list-why-us'>
              <span className='icon-why-us'><FontAwesomeIcon icon={faCheck} style={{ color: "#ec6f2d" }} /></span>
              <p className='text-why-us'>{title} <strong>{strong} </strong> {secondTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
import '../styles/dashboard/Cards.css'
export default function Cards() {
  const data = [
    {
      title: 'Tecnología',
      image: '/icons/tecnologia.png',
    },
    {
      title: 'Dropshipping',
      image: '/icons/dropshipping.png',
    },
    {
      title: 'Envíos & Logística',
      image: '/icons/envios-logistica.png',
    },
    {
      title: 'Fullfilment',
      image: '/icons/fullfilment.png',
    }
  ]
  return (
    <main className='main-card-container'>
      <div className='main-card-action'>
        {
          data.map((data, index) => (
            <div className='card-content' key={index}>
              <img className='main-card-image' src={data.image} alt="" />
              <p className='main-card-paragraph'>{data.title}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}
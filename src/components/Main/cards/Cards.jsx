import './Cards.css'
export default function Cards() {
  const data = [
    {
      title: 'Tecnología',
      image: 'https://dropi.co/wp-content/uploads/2023/06/TECNOLOGY-ICON.png',
    },
    {
      title: 'Dropshipping',
      image: 'https://dropi.co/wp-content/uploads/2023/05/dropshipping_1.png',
    },
    {
      title: 'Envíos & Logística',
      image: 'https://dropi.co/wp-content/uploads/2023/06/TRUCK-ICON.png',
    },
    {
      title: 'Fulfillment',
      image: 'https://dropi.co/wp-content/uploads/2023/06/BOX-ICON.png',
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
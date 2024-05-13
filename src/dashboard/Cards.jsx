/**
 * The `Cards` component renders a list of cards with titles and images based on the data provided.
 * @returns The `Cards` component is being returned, which contains a main container with a list of
 * cards displaying titles and images related to different categories such as Technology, Dropshipping,
 * Envíos & Logística, and Fullfilment. Each card includes an image and a title.
 */
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
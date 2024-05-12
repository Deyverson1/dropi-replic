import '../styles/components/Integrations.css'
function Integration() {
  const dataIntegrations = [
    {title: 'WooCommerce', image: 'https://dropi.co/wp-content/uploads/2023/05/integracion_woocommerce.png'},
    {title: 'Shopify', image: 'https://dropi.co/wp-content/uploads/2023/05/integracion_shopify.png'},
    {title: 'Chat Center', image: 'https://dropi.co/wp-content/uploads/2023/05/integracion_chatcenter.png'},
    {title: '3pod 3dpod', image: 'https://dropi.co/wp-content/uploads/2023/10/3pod.png'},
  ]
  return (
    <>
      <div className='integrations'>
        <h1>Integraciones</h1>
        <button>Disponibles</button>
      </div>
      <article className="integrations-cards-content">
        {dataIntegrations.map((dato, index) => (
          <main key={index} className="integrations-card">
            <div>
              <img src={dato.image} alt="" />
            </div>
            <h1>{dato.title}</h1>
            <button>Ver</button>
          </main>
        ))}
      </article>
    </>
  )
}
export default Integration;
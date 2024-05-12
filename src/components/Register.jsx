import '../styles/components/Register.css'

export default function RegisterCard(props) {
  const countries = [
    { country: 'Colombia', image: '/countries/colombia.png' },
    { country: 'Panamá', image: '/countries/panama.png' },
    { country: 'México', image: '/countries/mexico.png' },
    { country: 'Chile', image: '/countries/chile.png' },
    { country: 'Ecuador', image: '/countries/ecuador.png' },
    { country: 'Perú', image: '/countries/peru.png' },
    { country: 'España', image: '/countries/spain.png' },
  ]
  const { title, background, titleColor, paddingBottom } = props
  return (
    <section className='register-container' style={{ backgroundColor: background, paddingBottom: paddingBottom }}>
      <h3 className='register-title' style={{ color: titleColor }} >{title}</h3>
      <div className='register-container-div'>
        {countries.map((country, index) => (
          <div key={index} className='register-container-map'>
            <img className='register-image' src={country.image} alt='' />
            <p className='register-country-name' >{country.country}</p>
            <button className='register-country-button' style={{ color: background, backgroundColor: titleColor }}> {title}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
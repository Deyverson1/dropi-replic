/**
 * The RegisterCard component renders a section with a title, background color, and a list of countries
 * with images and buttons.
 * @returns The RegisterCard component is being returned. It is a section element with a container for
 * registration information. It includes a title, a list of countries with images and buttons for each
 * country. The styling of the component is determined by the props passed to it, such as background
 * color, title color, and padding bottom.
 */
import '../styles/components/Register.css'

export default function RegisterCard(props) {
  const { title, background, titleColor, paddingBottom } = props
  const countries = [
    { country: 'Colombia', image: '/countries/colombia.png' },
    { country: 'Panamá', image: '/countries/panama.png' },
    { country: 'México', image: '/countries/mexico.png' },
    { country: 'Chile', image: '/countries/chile.png' },
    { country: 'Ecuador', image: '/countries/ecuador.png' },
    { country: 'Perú', image: '/countries/peru.png' },
    { country: 'España', image: '/countries/spain.png' },
  ]
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
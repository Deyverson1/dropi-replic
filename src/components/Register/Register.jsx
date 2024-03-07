import './Register.css'

export default function Register(props) {
    const countries = [
        { country: 'Colombia', image: 'https://dropi.co/wp-content/uploads/2023/05/colombia.png' },
        { country: 'Panamá', image: 'https://dropi.co/wp-content/uploads/2023/05/panama.png' },
        { country: 'México', image: 'https://dropi.co/wp-content/uploads/2023/05/mexico.png' },
        { country: 'Chile', image: 'https://dropi.co/wp-content/uploads/2023/05/chile.png' },
        { country: 'Ecuador', image: 'https://dropi.co/wp-content/uploads/2023/05/ecuador.png' },
        { country: 'Perú', image: 'https://dropi.co/wp-content/uploads/2023/05/peru.png' },
        { country: 'España', image: 'https://dropi.co/wp-content/uploads/2023/11/ESPANA-FINAL.png' },
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
                        <button className='register-country-button' style={{color: background, backgroundColor: titleColor}}> {title}</button>
                    </div>
                ))}
            </div>
        </section>
    )
}
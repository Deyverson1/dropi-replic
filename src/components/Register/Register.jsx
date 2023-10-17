import './Register.css'
export default function Register(){
    const countries = [
        { country: 'Colombia', image: 'https://dropi.co/wp-content/uploads/2023/05/colombia.png'},
        { country: 'Panamá', image: 'https://dropi.co/wp-content/uploads/2023/05/panama.png'},
        { country: 'México', image: 'https://dropi.co/wp-content/uploads/2023/05/mexico.png'},
        { country: 'Chile', image:'https://dropi.co/wp-content/uploads/2023/05/chile.png'},
        { country: 'Ecuador', image:'https://dropi.co/wp-content/uploads/2023/05/ecuador.png'},
        { country: 'Perú', image:'https://dropi.co/wp-content/uploads/2023/05/peru.png'},
    ]
    return(
        <section className='register-container'>
            <h3 className='register-title'>Regístrate</h3>
            <div className='register-container-div'>
            {
                countries.map((country, index) => (
                    <div key={index} className='register-container-map'>
                        <img className='register-image' src={country.image} alt=''/>
                        <p className='register-country-name' >{country.country}</p>
                        <button className='register-country-button'> Regístrate</button>
                    </div>
                ))
            }
            </div>
        </section>
    )
}
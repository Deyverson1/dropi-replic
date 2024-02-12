import { useRef, useState } from 'react'
import Header from '../../Header/Header'
import './proveedores.css'
export default function Proveedores() {
  let [display, setDisplay] = useState('')
  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    }
  };
  const videoRef = useRef(null)
  function handleClick() {
    setDisplay('none')
    playVideo()
  }
  return (
    <>
      <Header color='#fff' />
      <section className="content-proveedores">
        <div className='div-text-proveedores'>
          <h1 className='h1-proveedores'>Proveedores
          </h1>
          <span className='span-proveedores'>Premium</span>
        </div>
        <main className='main-proveedores'>
          <div className='video-content-proveedores'>
            <div> <video ref={videoRef} controls preload="metadata" controlsList="nodownload" src="https://dropi.co/wp-content/uploads/2024/01/VIDEO-PROVEEDORES-HORIZONTAL.mp4"></video>
              <div className='preview' style={{ display: display || 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleClick} >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playstation-triangle" style={{ transform: 'rotate(90deg)' }} width="124" height="124" viewBox="0 0 24 24" color='white' strokeWidth=".7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"/><path d="M9.5 13h5l-2.5 -3.5z" fill='white'/></svg></div>
                
            </div>
          </div>
          <div className='content-parrafo-proveedores'>
            <p className='parrafo-proveedores'>Dropshippers bienvenidos a este espacio, en donde encontrarás a los mejores proveedores de nuestra plataforma, ellos son los proveedores premium, encontrarás su política de garantías, su contacto directo y adicional a eso nos pondrán material gráfico para que prendas tus campañas, estos proveedores han pasado por unos requisitos y un estudio y tienen una operación impecable. ¡A montar campañas!</p>
          </div>
        </main>
      </section>
      {/* <section>
        <div>
        <span className='span-proveedores'>Premium</span>
        </div>
      </section> */}
    </>
  )
}
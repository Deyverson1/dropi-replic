import './Video.css'
export default function Video(){
 return (
    <main className='main-content'>
    <div>
       <video className='main-video' src="/media/videoDropi.mp4" autoPlay muted playsInline loop></video>
          <div className='main-video-text-container'>
             <h2 className='main-video-lema'>El mejor aliado logístico para</h2>
             <h2 className='main-video-lema-type'>Tu E-commerce</h2>
             <h2 className='main-video-action'> <span>Plataforma líder</span> en <span>soluciones tecnológicas
                </span></h2>
             <h2 className='main-video-action'>para tu <span>negocio online
                </span> </h2>
          </div>
    </div>
    </main>
 )
}
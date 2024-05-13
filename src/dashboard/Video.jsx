/**
 * This function returns a JSX element for displaying a video with accompanying text content in a React
 * component.
 * @returns A functional component named Video is being returned. It contains a main element with a
 * className of 'main-content' that includes a video element with a className of 'main-video'. The
 * video source is set to "/media/videoDropi.mp4" with attributes autoPlay, muted, playsInline, and
 * loop. Below the video, there is a div with a className of 'main-video-text-container'
 */
import '../styles/dashboard/Video.css'
export default function Video() {
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
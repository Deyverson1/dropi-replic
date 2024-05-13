/**
 * The WhatsApp component renders a clickable image that links to a WhatsApp chat with a predefined
 * message.
 * @returns The WhatsApp component is being returned, which consists of an anchor element `<a>` with a
 * link to a WhatsApp API endpoint. Inside the anchor element, there is an image `<img>` with the
 * source set to "/img/whatsapp.png". The anchor element has a target attribute set to '_blank' to open
 * the link in a new tab, and it has class names 'whatsapp-href
 */
import '../styles/components/WhatsApp.css'
export default function WhatsApp(){
    return(
        <a target='_blank' className='whatsapp-href' href="https://api.whatsapp.com/send/?phone=573218379821&text=Hola+vengo+de+la+Web+y+deseo+saber+m%C3%A1s+de+Dropi%21&type=phone_number&app_absent=0"> <img className='whatsapp-image' src="/img/whatsapp.png" alt="" /> </a>
    )
}
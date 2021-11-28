import {Container} from 'react-bootstrap'
import './Home.css'
import {Image} from 'react-bootstrap'
import './Contact.css'

function Contact() {
    return (
      <Container>
      <p><a className="contactWs" target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=+54 9 1154905110">Click here to contact me on WhatsApp</a></p>
      <p className="contactText">E-mail: <strong>verteramo.federico@gmail.com</strong></p>
      <Image className="photoContact" src="/images/content/foto335.jpeg" fluid />
      </Container>
    )
  }
  
  export default Contact;
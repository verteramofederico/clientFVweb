import {Image, Container} from 'react-bootstrap'
import '../views/Home.css'

function EPRushHour() {
    return (
      <Container>
      <h1 className="titleBody">Rush Hour – New Release (EP).</h1>
      <Image className="imageMain" src="/images/content/tapaRushHour.jpeg" rounded />
      <div className="pContent">
      <p>As a result of a new partnership between <em>Federico Verteramo</em> and the <em>Sureños </em>label, <strong><em>Rush Hour</em></strong> is the brand new EP celebrating the music of <em>Otis Rush</em>.</p>
      <p>The new release available on all platforms consists of <em>¨My baby is a good´un¨, ¨You’re killing my love¨ and ¨Right Place Wrong Time¨</em>. This last song has been pre-released in a video clip and featured the stellar participation of <em>Brazilian Igor Prado</em>, one of the most prominent guitarists of the genre of the last 20 years.. <a rel="noreferrer noopener" href="https://www.youtube.com/watch?v=JNWdwSrIKd0" target="_blank"><em>Link to videoclip</em></a></p>
      <p><em>Otis Rush</em>, although not as remembered as other artists, is one of the greatest references of Blues, and in particular of what became known as <em>West Side Chicago Blues</em>. Carrying out this project makes a sense of homage, of enjoyment, of learning.</p>
      <p><em>Sureños</em> is a label from Buenos Aires, Argentina and since 2016 has been working with blues, funk and soul artists. This particular search is completed with the recording mode: played live and recorded on analog tape with the <em>Tascam</em> <em>388</em> that can be seen on the cover.</p>
      </div>
      <Image className="imageBody" src="/images/content/foto335.jpeg" rounded />
      <div className="credits">
        <strong>Credits:</strong>
        <br/>Guitar-voice: Federico Verteramo<br/>Bass: Julio Fabiani<br/>Piano, hammond: Anahi Fabiani<br/>Drums: German Pedraza<br/>Trompet: Yair Lerner<br/>Sax: Santiago Zarba<br/>Produccion: Sureños<br/>Studio: Sureños<br/>Recording and mix: Julio Fabiani<br/>Photo and video: Jorge Costales (Wopa Live Streaming)<br/>Desing cover:&nbsp; Jorge Costales (Wopa Live Streaming)
      </div>


      </Container>

      
    )
  }
  
  export default EPRushHour;
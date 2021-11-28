import {Image, Container} from 'react-bootstrap'
import '../views/Home.css'

function EPLockdown() {
    return (
      <Container>
      <h1 className="titleBody">New EP – Live Session</h1>
      <Image className="imageMain" src="/images/content/livesession.jpeg" rounded />
      <div className="pContent">
      <p>EP recorded in September 2020 in Buenos Aires.<br/>Recorded in Fidelius Studio, mixed by Larry Cuffia.</p>
      <p>Available in:<br/><a href="https://open.spotify.com/album/6olxhUPCm8cY5PxIKwRpYx" target="_blank" rel="noreferrer noopener">Spotify</a><br/><a href="https://music.apple.com/ar/album/live-session-ep/1506402516" target="_blank" rel="noreferrer noopener">Itunes</a><br/><a href="https://youtu.be/Z6qlffSDnpo?fbclid=IwAR2cl-Wf45NqWFrRwLtoKfohyqTLNa_A5EBOzNm-JcW36SYc07BslSpQ1KM" target="_blank" rel="noreferrer noopener">Youtube</a></p>
      <p>Homero Tolosa on drums, Mauro Bonamico on bass, Nico Yudchak on bass, Federico Verteramo on guitar.</p>
      </div>
      <iframe width="560" className="videoYoutube" height="315" src="https://www.youtube.com/embed/Z6qlffSDnpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>

      
    )
  }
  
  export default EPLockdown;
import {Container} from 'react-bootstrap'
import './Home.css'
import {Link} from "react-router-dom"

function Blog() {
    return (
      <Container>
      <h1 className="titleBody">Blog</h1>
      <h4>All posts</h4>
      <div className="menuBlog">
      <ul className="ulBlog">
		<li>
        <Link to="/blog/ep-rush-hour">Rush Hour – New release! EP</Link>
        <span className="post-date">noviembre 4, 2021</span>
        </li>
        <li>
        <Link to="/blog/ep-whatsnext">What´s Next? new release</Link>
        <span className="post-date">abril 9, 2021</span>
        </li>
        <li>
        <Link to="/blog/ep-lockdown">New release: Lockdown at Home (EP)</Link>
        <span className="post-date">junio 19, 2020</span>
        </li>
        <li>
        <Link target='_blank' to="/blog/ep-livesession">New EP – Live Session</Link>
        <span className="post-date">abril 17, 2020</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2019/08/08/brasililhabluesfestival/">
        Brasil – Ilha Blues Festival junto a Xime Monzon Band</a>
        <span className="post-date">agosto 21, 2019</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2019/01/18/confirmada-nueva-gira-en-europa-en-2019/">
        Anuncio gira Europa  2019</a>
        <span className="post-date">enero 12, 2019</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2018/11/03/iii-festival-de-armonica-de-rosario/">
        III Festival de Armónica de Rosario</a>
        <span className="post-date">noviembre 11, 2018</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2018/11/03/dylan-bishop-estuvo-en-argentina/">
        Dylan Bishop estuvo en Argentina!</a>
        <span className="post-date">julio 17, 2017</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2018/11/03/315/">
        Crónica de la primer gira por Christian Morana</a>
        <span className="post-date">marzo 17, 2017</span>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href="https://verteramofedericoblog.wordpress.com/2018/11/03/lanzamos-nuevo-disco-e-iniciamos-gira-presentacion/">
        Lanzamos nuevo disco e iniciamos gira presentación</a>
        <span className="post-date">marzo 8, 2017</span>
        </li>
        </ul>
        </div> 
      </Container>
    )
  }
  
  export default Blog;
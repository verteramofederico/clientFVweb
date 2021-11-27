import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import ImageHome from './ImageHome'
import './Header.css'


function Header() {
  let location = useLocation();
  console.log()
    return (
      <>
      <Navbar className="navContainer" expand="lg">
  <Container>
    <Link className="link" to="/">FEDERICO VERTERAMO</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="link" href="#home">ABOUT</Nav.Link>
        <NavDropdown className="link" title="Multimedia" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MUSIC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">VIDEO</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">BLOG</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="link" href="#link">CONTACT</Nav.Link>
      </Nav>
      <div className="socialIcons">
        <SocialIcon className="socialLink" bgColor url="https://www.facebook.com/verteramofede/" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://www.instagram.com/federico.verteramo" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://www.youtube.com/channel/UCpUDd-xbZa1SfPk8U4fNheQ" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://open.spotify.com/artist/7arbLF5KNH9SXNCuSYUsYx" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://twitter.com/FedeVerteramo" style={{ height: 35, width: 35 }} />
        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    {location.pathname === "/home" ? <ImageHome/> : <hr className="solid"></hr> }   
      </>
    )
  }
  
  export default Header;
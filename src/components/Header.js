import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap"
import {useState} from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import ImageHome from './ImageHome'
import './Header.css'
import Image from 'react-bootstrap/Image'
import SelectLanguage from '../components/SelectLanguage';

function Header() {
  let location = useLocation();
  const [chooseLanguage, setChooseLanguage] = useState(false);
  const handleShow = () => {
    setChooseLanguage(true)
  }


  console.log()
    return (
      <>
      {chooseLanguage ? <SelectLanguage showModal={true}/> : null}
      <Navbar className="navContainer" expand="lg">
  <Container>
    <NavLink activeClassName="active" className="link" to="/">FEDERICO VERTERAMO</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="link"><NavLink className="link" to='/about'>ABOUT</NavLink></Nav.Link>
        <NavDropdown className="link" title="Multimedia" id="basic-nav-dropdown">
          <NavDropdown.Item ><NavLink className="link" to='/music'>MUSIC</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink className="link" to='/video'>VIDEO</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><NavLink className="link" to='/blog'>BLOG</NavLink></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="link"><NavLink className="link" to='/contact'>CONTACT</NavLink></Nav.Link>
      </Nav>
        
      <div className="socialIcons">
        <Image onClick={handleShow}  className="languageIcon" src="/images/internet.png" roundedCircle />
        <SocialIcon className="socialLink" target='_blank'  bgColor url="https://www.facebook.com/verteramofede/" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://www.instagram.com/federico.verteramo" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://www.youtube.com/channel/UCpUDd-xbZa1SfPk8U4fNheQ" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://open.spotify.com/artist/7arbLF5KNH9SXNCuSYUsYx" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://twitter.com/FedeVerteramo" style={{ height: 35, width: 35 }} />
        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    {location.pathname === "/" ? <ImageHome/> : <hr className="solid"></hr> }
      </>
    )
  }
  
  export default Header;
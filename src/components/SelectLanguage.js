import Modal from 'react-bootstrap/Modal'
import {Button, Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import './SelectLanguage.css'
import ReactCountryFlag from "react-country-flag"

function SelectLanguage(props) {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
      setShow(props.showModal)
    }, [props.showModal])

    const handleClose = () => {
      setShow(false)
    };

    return (
        <>
      <Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please choose your language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="modalUl">
            <li>
            <ReactCountryFlag className="emojiFlag" countryCode="ES"
              style={{ fontSize: '4em', lineHeight: '1em', }}/>
            <Button className="buttonLanguage" variant="outline-secondary" onClick={handleClose}>Ingresar en Español</Button>
            </li>
            <li>
            <ReactCountryFlag className="emojiFlag" countryCode="FR"
              style={{ fontSize: '4em', lineHeight: '1em', }}/>
              <Button className="buttonLanguage" variant="outline-secondary" onClick={handleClose}>Entrer en Français</Button>
            </li>
            <li>
            <ReactCountryFlag className="emojiFlag" countryCode="GB"
              style={{ fontSize: '4em', lineHeight: '1em', }}/>
              <Button className="buttonLanguage" variant="outline-secondary" onClick={handleClose}> Enter in English </Button>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
      </Container>
        </>
    )
  }
  
  export default SelectLanguage;
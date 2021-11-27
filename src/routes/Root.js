import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import Footer from "../components/Footer"
import SelectLanguage from "../views/SelectLanguage"
import Home from "../views/Home"

function Root() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<SelectLanguage />} />
      <Route path="/app" element={<App />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Root;
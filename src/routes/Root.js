import {
  Routes,
  Route
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import SelectLanguage from "../views/SelectLanguage"
import Home from "../views/Home"

function Root() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<SelectLanguage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Root;
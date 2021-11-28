import {
  Routes,
  Route
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Home from "../views/Home"
import About from "../views/About"
import Contact from "../views/Contact"
import Blog from "../views/Blog"

/* Blog components */
import EPRushHour from "../blog/EPRushHour"
import EPWhatsNext from "../blog/EPWhatsNext"
import EPLockdown from "../blog/EPLockdown"
import EPLivesession from "../blog/EPLivesession"

function Root() {
  return (
    <>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      {/* BLOG */}
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/blog/ep-rush-hour" element={<EPRushHour/>}/>
      <Route exact path="/blog/ep-whatsnext" element={<EPWhatsNext/>}/>
      <Route exact path="/blog/ep-lockdown" element={<EPLockdown/>}/>
      <Route exact path="/blog/ep-livesession" element={<EPLivesession/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Root;
import './Footer.css'
import { SocialIcon } from 'react-social-icons'
import {Link} from "react-router-dom"

function Footer() {
    return (
      <>
      <div className="menuBlog">
	  <hr className="solid"></hr>
      <h4 className="blogTitle">Blog</h4>
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
					<Link to="/blog/ep-livesession">New EP – Live Session</Link>
											<span className="post-date">abril 17, 2020</span>
									</li>
					</ul>
        </div>
		<div className="socialIconsFooter">
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://www.facebook.com/verteramofede/" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://www.instagram.com/federico.verteramo" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://www.youtube.com/channel/UCpUDd-xbZa1SfPk8U4fNheQ" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://open.spotify.com/artist/7arbLF5KNH9SXNCuSYUsYx" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" target='_blank' bgColor url="https://twitter.com/FedeVerteramo" style={{ height: 35, width: 35 }} />
        </div>
      </>
    )
  }
  
  export default Footer;
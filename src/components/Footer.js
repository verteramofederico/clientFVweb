import './Footer.css'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
      <>
      <div className="menuBlog">
	  <hr className="solid"></hr>
      <h4 className="blogTitle">Blog</h4>
      <ul className="ulBlog">
											<li>
					<a target="_blank" href="https://verteramofedericoblog.wordpress.com/2021/11/04/rush-hour-nuevo-lanzamiento-ep/">Rush Hour – New release! EP</a>
											<span className="post-date">noviembre 4, 2021</span>
									</li>
											<li>
					<a target="_blank" href="https://verteramofedericoblog.wordpress.com/2021/04/09/whats-next/">What´s Next? new release</a>
											<span className="post-date">abril 9, 2021</span>
									</li>
											<li>
					<a href="https://verteramofedericoblog.wordpress.com/2020/06/19/new-release-lockdown-at-home-ep/">New release: Lockdown at Home (EP)</a>
											<span className="post-date">junio 19, 2020</span>
									</li>
											<li>
					<a href="https://verteramofedericoblog.wordpress.com/2020/04/17/eplivesession/">New EP – Live Session</a>
											<span className="post-date">abril 17, 2020</span>
									</li>
					</ul>
        </div>
		<div className="socialIconsFooter">
        <SocialIcon className="socialLink" bgColor url="https://www.facebook.com/verteramofede/" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://www.instagram.com/federico.verteramo" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://www.youtube.com/channel/UCpUDd-xbZa1SfPk8U4fNheQ" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://open.spotify.com/artist/7arbLF5KNH9SXNCuSYUsYx" style={{ height: 35, width: 35 }} />
        <SocialIcon className="socialLink" bgColor url="https://twitter.com/FedeVerteramo" style={{ height: 35, width: 35 }} />
        </div>
      </>
    )
  }
  
  export default Footer;
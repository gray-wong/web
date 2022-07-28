import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/dfg/header.jpg'
import SBU from '../assets/images/dfg/SBU-logo.png'
import Sitemap from '../assets/images/dfg/sitemap.jpg'
import Pictures from '../assets/images/dfg/pictures.png'
import Circles from '../assets/images/dfg/circles.png'
import Legacy from '../assets/images/dfg/legacy.png'
import Colors from '../assets/images/dfg/colors.png'
import Home from '../assets/images/dfg/Home.png'
import About1 from '../assets/images/dfg/About-1.png'
import About2 from '../assets/images/dfg/About-2.png'
import EndImg from '../assets/images/end-1-green.png'
import Next from './Next'


const Dfg = () => {
  return (
    <div id="top">
        <Container className='cont proj'>
          <br/>
        <Back className='back-top' /><br/>

            <Row className='proj-header g-0 p-0'>
                {/* <Col md={2} xs={2}><img src={EndImg} className='proj-header-img' /></Col> */}
                <Col md={6}>
                <h1>Develop<br/>For<br />Good</h1>
                </Col>
                <Col md={6} className='align-self-center'>
                <ul className='proj-stats'>
                    <li>01/2021 - 03/2021</li>
                    <li>South Bronx United</li>
                    <li>Design lead</li>

                </ul>
                </Col>
            </Row>
            <img src={HeaderImg} className='header-img' alt="An image collage of children playing soccer, a family gathered around a laptop, and an adult and child with the South Bronx United website." />
            <Row className='proj-desc'>
                <Col>
                <h2>Overview</h2>
<Row>
    <Col md={2} xs={3}><img src={SBU} alt="" /></Col>
    <Col md={10} xs={9}><p>
During my internship with the organization Develop For Good, I was placed with the non-profit South Bronx United (SBU). After over a decade of offering soccer, education, and support to youth in the community, SBU needed help with redesigning their website to match their progress and vision. I helped take over the redesigning effort after the previous Develop For Good team concluded their drafts. As the design lead, I curated the visual design to create a more vibrant, energizing, and bold <div className='keyword'>brand image</div>.
</p></Col>

</Row>

<h2>Information architecture</h2>
<p>We started by dissecting their website's <div className='keyword'>information architecture</div>. With SBU's previous website, the information was often organized haphazardly, with a hierarchy that was unintuitive and many links referring to redundant pages. In inspecting the pages along with the site analytics provided by the client, I decided to recategorize their website for cleaner, smoother navigation.</p>

<img src={Sitemap} alt="The sitemap for SBU's old and new websites." />
<p><br/>The new sitemap condenses similar information into the same page and category and narrows the point of access to such information to one page only, instead of allowing for multiple pages to route to the same content. By doing so, we were able to cut down the confusion that users face regarding how to navigate the website so that they spend less time digging for the information and resources they need.</p>

<h2>Brand elements</h2>
<p>
After carefully considering the core values and essence of SBU along with client references and demands for the rebranding, I decided to utilize the following elements to rebrand South Bronx United:
</p>
<Row className='justify-content-center'>
    <Col md={7} xs={6} className='align-self-center'><i>Pictures:</i> Pictures tell a thousand words, giving a sense of the environment, interactions, and growth that happens at SBU. The redesigns place a heavier emphasis on this visual storytelling, helping to pace users through content and grab attention when necessary. It also adds a more personal, intimate touch and introduces a sense of camaraderie between the audience and the SBU team and members.</Col>
    <Col md={3} xs={5} className='align-self-center'><img src={Pictures} alt="" /></Col>
</Row>
<Row className='justify-content-center'>
    <Col md={3} xs={5} className='align-self-center'><img src={Circles} alt="" /></Col>
    <Col md={6} xs={6} className='align-self-center'><i>Circles:</i> SBU provides a community for youths through the field of soccer and with it, a sense of belonging and unity. The circle motifs serve as an abstraction of this idea while also acting as a visual breadcrumb trail for where the eye should anchor next while browsing.</Col>
</Row>
<Row className='justify-content-center'>
    <Col md={7} xs={6} className='align-self-center'><i>Legacy through repetition:</i> From its many years of service comes the idea of supporting generations and generations of scholars. This idea of legacy is echoed through the visual element of repeated “South Bronx United” text. Often used in the background, this repetition also brings rhythm and texture to the page, further supporting a more fluid pacing of the website content.</Col>
    <Col md={3} xs={5} className='align-self-center'><img src={Legacy} alt="" /></Col>
</Row>
<Row className='justify-content-center'>
    <Col md={3} xs={5} className='align-self-center'><img src={Colors} alt="" /></Col>
    <Col md={6} xs={6} className='align-self-center'><i>Color scheme:</i> While the original website sticks to a modest color palette, the redesign reinvigorates pages with a bold color scheme that boasts a wider range of values to capture attention, but not distract.</Col>
</Row>
<p>By using these elements across the website, I molded the image of South Bronx United to be more refreshing, modern, and sleek while still staying true to SBU's original image and values of building and uplifting community.
</p>
<h2>Website prototypes</h2>
<p>Bringing those elements into the website design of SBU, I created these prototype webpages through Figma. I was specifically in charge of implementing the design for the Home and About pages and leading the implementation of brand elements on other pages.</p>
<Row>
<Col xs={7}><h3>Home page</h3><img src={Home} alt="The full home page I designed for SBU's new website." /></Col>
<Col>
<Row>
    <Col><h3>About Us page (Our Mission)</h3><img src={About1} alt="The about page that I designed for SBU's new website." /></Col>
    
</Row>
<p><br/><br/></p>
<Row>
<Col><h3>About Us page (Staff)</h3><img src={About2} alt="" /></Col>
</Row>
</Col>
</Row>
<p><br/>The finished product was implemented by another Develop For Good team in Squarespace for ease of client modification and revision, so differences vary accordingly.<img className='end-article' src={EndImg} alt="" /></p>
                </Col>
            </Row>
<Next next="Accenture Interactive" subtitle="The Twin Projects of Accenture Malaysia" link="accenture-interactive#top" />
<Back location="portfolio" className='back-bottom' />
            
        </Container>
        <br/>
        <div className="attribution">
<p>Stock images <a href="http://www.freepik.com">designed by Freepik</a>.</p>
</div>  
    </div>
  )
}

export default Dfg
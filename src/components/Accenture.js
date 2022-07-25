import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/accenture/header.jpg'
import Screenshots from '../assets/images/accenture/screenshots.png'
import Ut from '../assets/images/accenture/ut.jpg'
import KeyVisual from '../assets/images/accenture/key-visual.png'
import EndImg from '../assets/images/end-1-green.png'
import Next from './Next'
import Pheader from './Pheader'


const Accenture = () => {
  return (
    <div>
        <Container className='cont proj'>
          <br/>
        <Back className='back-top' /><br/>

            <Pheader name="Accenture Interactive" date="06/2019 - 08/2019" subtitle="Accenture Malaysia" role="Design Intern" />
            <img src={HeaderImg} className='header-img' alt="An image collage of the myTNB app, electric units, a user testing session, the Gardens building in Malaysia, and a key visual image of a rectangular, tall building." />
            <Row className='proj-desc'>
                <Col>
                <h2>Overview</h2>
                <p>
At Accenture Interactive Malaysia, my efforts were split between two projects: 1) the creation of the myTNB app for the number one electrical supplier in Southeast Asia and the sole electric utility supplier in Malaysia, and 2) an internal relocation campaign titled the Truly Reimagined Experience. In the former, I played the role of a design intern and aided in user experience research, copywriting, and crafting a brand tone of voice. In the latter, I led the needfinding process and also crafted a key visual for the campaign.
</p>

<h2 style={{textTransform: 'none'}}>myTNB app</h2>
The electric utility supplier Tenaga Nasional Berhad, or TNB, enlisted the help of Accenture Malaysia to revamp their mobile app for a smoother and more sleek portal to use their services. In the copywriting and brand tone of voice realm, I was able to present their app, myTNB, as informative and helpful while remaining charming and friendly.
<Row className='justify-content-center'>
<Col xs={9} lg={6}>
<h3>copywriting & brand tone of voice</h3>
<p>In the initial phases of <div className='keyword'>copywriting</div>, I proofread copies and ensured that the copy of the digital implementation matched that of the design team’s mock-ups so as to be as consistent and faithful to the design team’s vision as possible. This included directly editing the copy and flagging text that should be altered.</p>
<p>
I also constructed a <div className='keyword'>brand tone of voice</div> playbook, which outlined to the client the style of communications to pursue in the future, and presented it to TNB. The playbook included various examples of what to aim for and what to avoid in order for myTNB to remain unintimidating and warm in order to build rapport with customers and so that users were not discouraged from using the app.
</p>
</Col>
<Col lg={6} className='align-self-center'>
<img src={Screenshots} alt="Screenshots that showcase myTNB's brand tone of voice and in-app communications." />
</Col>
</Row>
<h3>quality assurance</h3>
<p>I also performed <div className='keyword'>quality assurance</div> during the implementation phase of the project, which involved identifying bugs, inconsistencies, and other such errors between the design team’s prototype and the software team’s app. This helped to ensure that designs and interactions were replicated faithfully so as to maintain its sleek look and feel.
</p>
<Row className='justify-content-center'>
<Col xs={8} lg={6} className='align-self-center'>
<img src={Ut} alt="A picture of four people gathered around a wall of post-it notes." />
</Col>
<Col lg={6}>
<h3>user experience testing</h3>
<p>
In preparation for the <div className='keyword'>user testing</div> sessions, I created an agenda, script, and necessary materials for each session and also recruited participants. In order to secure participants for each session, I used <i>guerrilla recruiting</i> (at locations such as malls, banks, and TNB offices) and <i>cold contacting</i> (by reaching out to existing TNB customers). In total, we conducted two types of user testing sessions: one round of individual interview sessions (eight total participants) and two rounds of focus group sessions (totaling nine participants; four in the first round and five in the second).</p>
<p>As co-proctor for the sessions, I recorded user interactions, participant behaviors, and any comments and feedbacks and feelings they had regarding the app while also asking follow-up questions when additional information might be needed in order to build a better case for any adjustments or areas of friction to address in the future. Each session involved many instances of <div className='keyword'>A/B testing</div>, tours, and exercises, as well as any additional needfinding to better support future changes in designs.
</p>

</Col>
</Row>
<Row className='justify-content-center'>
<Col xs={9}>
<p>
Here is some of what I learned about the app and about user testing:
</p>
<ul className='bulleted-1 bold-section'>
<li>Wording matters—a lot. Considering word associations and connotations when planning out text can resolve a lot of misconceptions and miscommunications.</li>
<li>Prioritize familiar design and interface patterns, especially when your user base includes those who are not as technologically literate. By using patterns over designs that are creative and inventive for the sake of it, your audience will be better equipped to understand how to interact with your design.</li>
<li>Using activities can work to your advantage with building rapport and running user testing sessions. By beginning with group and paired activities, participants can feel more comfortable in voicing their own opinions by feeling like they belong and by taking on a “role” in a group.</li>
</ul>

</Col>
</Row>

<h2>Truly Reimagined Experience</h2>
The other project I worked on at Accenture was the Truly Reimagined Experience (abbreviated as TRX), titled after the building that Accenture Malaysia would be relocating to, Tun Razak Exchange (TRX). The TRX project was an internal campaign run in order to garner excitement and address any existing workplace environment concerns. To that end, I led the needfinding process and created a key visual for the campaign.

<h3>needfinding</h3>
<p>
The needfinding process was split into two parts: <i>a survey and interviews</i>. I crafted and publicized a company-wide needfinding and screener <div className='keyword'>survey</div> that served to recruit participants for interviews and to also gather general and quantitative data. It yielded 163 responses across 14 Accenture Malaysia organizations, helping me to understand overall pain points in the workplace environment and provide me with topics to probe during interviews. I then headed 14 individual and group <div className='keyword'>interviews</div> with Accenture employees across all arms of Accenture Malaysia to achieve depth and background on workplace environment needs and to understand employee relationships with the office space. This also helped to provide qualitative and anecdotal data. I then synthesized the survey and interview findings into a slide deck for presentation to Accenture Malaysia executives along with my key visual, shown below.
</p>
<Row className='justify-content-center'>
<Col className='align-self-center' md={4}><h3>key visual</h3>
<p>
The <div className='keyword'>key visual</div> that I created put an emphasis on inclusivity and belonging while providing a location and home to Accenture employees. As a result, the key visual showcases the TRX building and surrounding environment in Kuala Lumpur.
</p>
</Col>
<Col className='align-self-center' md={8}><img src={KeyVisual} alt="The key visual that I designed. It shows the TRX building and the surrounding area. The TRX building is cut in half, and people are peeking out from inside." /></Col>
</Row>
<h2>conclusion</h2>
<p>Overall, I thoroughly enjoyed my internship at Accenture Interactive Malaysia. It was my first foray into the realm of HCI and helped shape the trajectory of my academic degree and career goals.<img className='end-article' src={EndImg} alt="" /></p>
                </Col>
            </Row>
<Next next="Design Gallery" subtitle="Piloting the Beginning of Learning" link="/design-gallery" />
<Back className='back-bottom' />

        </Container>
        <br/>
        <div className="attribution">
<p>Stock images <a href="http://www.freepik.com">designed by Freepik</a>.</p>
</div>  
    </div>
  )
}

export default Accenture
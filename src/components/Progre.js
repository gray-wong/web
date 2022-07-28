import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/progre/header.jpg'
import EndImg from '../assets/images/end-1-green.png'
import HomeImg from '../assets/images/progre/home.png'
import CheckinImg from '../assets/images/progre/checkin.png'
import LeaderboardImg from '../assets/images/progre/leaderboard.png'
import Journey from '../assets/images/progre/journeymap.png'
import Affinity from '../assets/images/progre/affinitymap.png'
import HMW from '../assets/images/progre/hmw-statements.png'
import Board from '../assets/images/progre/hmw-board.png'
import AvaEgg from '../assets/images/progre/ava-egg.png'
import AvaWave from '../assets/images/progre/ava-wave.png'
import AvaCheer from '../assets/images/progre/ava-cheer.png'
import Molecule from '../assets/images/progre/molecule.png'
import Blueprint from '../assets/images/progre/blueprint.png'
import Concept from '../assets/images/progre/concept.png'
import Rite from '../assets/images/progre/rite.png'
import Style from '../assets/images/progre/style.png'
import Mb from '../assets/images/progre/mb.png'
import Prototype from '../assets/images/progre/prototype.png'
import Next from './Next'


const Progre = () => {
  return (
    <div id="top">
        <Container className='cont proj'>
          <br/>
            <Back className='back-top' /><br/>
            <Row className='proj-header'>
                <Col md={6}>
                <h1>Progre</h1>
                </Col>
                <Col md={6} className='align-self-center'>
                <ul className='proj-stats'>
                    <li>01/2021 - 03/2021</li>
                    <li>CS 247S: Service Design</li>
                    <li>Project manager</li>

                </ul>
                </Col>
            </Row>
            <img src={HeaderImg} className='header-img' alt="An image collage of photos of people at the gym and fitness equipment. In the middle is an image of a man holding a phone up with a screen from Progre's app prototype." />
            <Row className='proj-desc'>
                <Col>
<h2>Overview</h2>
<Row className='justify-content-center'>
<Col xs={2} className='align-self-center'><img src={AvaEgg} alt="" /></Col>
    <Col xs={7} className='align-self-center'>
    In CS 247S: Service Design under Professor Julie Stanford, I led a team to examine the space of fitness during COVID-19 and the stress that pandemic policies place on the fitness experience. We were free to craft an idea from the ground up, beginning with needfinding and followed by ideation, rapid experimentation, prototyping, and testing, and we came up with Progre, a newly-designed gym-booking app that creates a virtual space for positive affirmation, communal support, and friendly competition.</Col>
</Row>


<h2>Needfinding & synthesis</h2>
<Row>
<Col md={5}><p>
To start off, I created an <div className='keyword'>interview guide</div> targeting <i>four main actor types:</i> gym-goers, fitness instructors, gym staff, and gym administration. It was important to include such a variety to get a comprehensive understanding of pandemic friction in gyms.
</p>
</Col>
<Col md={7}><p>
After recruiting 8 interviewees (2 per actor type) and conducting interviews, we synthesized. From the interviews, we created <div className='keyword'>journey and affinity maps</div> per actor, generated <div className='keyword'>insights</div> per actor, an overall <div className='keyword'>grounded theory for</div> all actors and sub-theories per actor type, and brainstormed a number of <div className='keyword'>how-might-we statements</div>.
</p>
</Col>
</Row>


<Row>
<Col><img src={Journey} alt="A journey map that I created from my needfinding interview." /></Col>
<Col><img src={Affinity} alt="An affinity map of a participant." /></Col>
</Row>
<p><br/>
Here’s a summary of what I learned and theorized:<br/>
<Row className='justify-content-center'>
    <Col xs={10}><div className='bold-section'>Each actor’s needs and restrictions were not necessarily well understood by the other actors in the space of the gym. Policies are handed down from administrators to gym managers, gym staff, gym-goers and fitness instructors respectively; these latter actors were frustrated or discouraged because their needs to exercise and create spaces to exercise were not being met and/or ideas not heard. This communications gap accounted largely for the discontent in AOERC and the fitness community, even though actors shared a similar core motivation: <i>keeping students/themselves safe and well during COVID-19</i>.
</div></Col>
</Row>

</p>
<p>
Additionally and notably, I observed that gym staff, fitness instructors, and gym-goers tended to have overlaps in their interviews: they wanted to use fitness and gyms as a means to <i>uplift others and to stay healthy</i>, however <i>barriers</i>—physical and mental—prevented them from doing so. For some, it was the challenge of technology. For others, it was a lack of commitment and gym appointments being wasted because of no-shows.
</p>
<h2>Ideation</h2>
<p>
Among the <div className='keyword'>how-might-we statements</div> we developed individually and as a team, the following two stood out to us as ones that resonated with us:
</p>
<ul>
    <Row>
        <Col lg={5} md={6}><img src={HMW} alt="A Miro board containing various brainstormed How-Might-We statements." /></Col>
        <Col className='align-self-center'>
        <li>How might we empower busy students across various regions to engage with the natural world in meaningful ways?</li>
        <li>How might we encourage meaningful gym slot booking and minimize no-shows?</li>
        
        </Col>
    </Row>
</ul>
<Row>
<Col className='align-self-center'><p>
To answer how-might-we statements, we utilized <div className='keyword'>blue sky</div> and <div className='keyword'>dark horse thinking</div> to brainstorm and ideate, coming up with an idea that we pursued: gym gamification.
</p></Col>
<Col lg={6} md={6}><img src={Board} alt="A Miro board showing the ideas generated by the HMW statements." /></Col>
</Row>

<h3>Rapid experimentation</h3>
<Row className='justify-content-center'>
<Col md={5}><p>
I tested the premise of this idea through <div className='keyword'>rapid experimentation</div>, creating an <div className='keyword'>experiment planning worksheet</div>. The underlying assumption of this idea was that Stanford Wellness and Recreation can encourage more mindful appointment booking behavior by gamifying the process to add personal investment and stakes via an avatar, as well as a social and competitive aspect through rankings and virtual competitions between avatars.
</p>
</Col>
<Col md={2} xs={3}><img src={AvaWave} alt="" />
</Col>
<Col md={5}><p>
To test this, I recruited three participants of different gym-going demographics (old versus young gym-goers, casual versus committed gym-goers) and asked each of them to create a custom avatar. I then asked participants to contact me when they engaged in gym-related activities (namely booking and going to gym appointments), and I would send them back a picture of their leveled-up avatar upon each successful interaction.
</p>
</Col>
</Row>
<Row className='justify-content-center'>
<Col md={8}>
<p>
From this, I learned that:
</p>
<ul className='bulleted-1 bold-section'>
    <li>Avatar creation is something that can resemble ourselves, but doesn’t have to be human. While many avatars today focus on cartoonish but human representations of ourselves, avatars that are viewed as <i>pets and something to project onto can be useful to harness a sense of investment</i>.</li>
    <li>Gym-goers felt encouraged by avatar growth. One participant wondered, “How is my effort going to be represented here? [...] It felt like I could <i>see change [with my avatar]</i>.”</li>
    <li>For gym-goers that went with a gym buddy, <i>the presence of others and feeling supported</i> increased their motivation and commitment to fitness.</li>

</ul>
</Col>
</Row>
<h3>Building context</h3>
<Row className='justify-content-center'>
<Col md={8} xs={8}><p>
These insights did indeed support the premise of the experiment, so we proceeded with this idea, creating a <div className='keyword'>blueprint</div> for how we imagined the prototype to be used, a <div className='keyword'>molecule diagram</div> to better contextualize the idea, and various <div className='keyword'>concept sketches</div> to flesh out what features to include.
</p></Col>
<Col md={3} xs={4}><img src={Blueprint} alt="The blueprint for how Progre should be carried out at various stages." /></Col>
</Row>
<Row>
<Col md={6}>
    <Row>
        <Col><img src={Molecule} alt="The molecule for Progre that lends context for the problem that Progre addresses." /></Col>
    </Row>
    <Row className='justify-content-center'>
        <Col xs={8}><img src={Concept} alt="A concept sketch that shows how individuals might use Progre." /></Col>
    </Row>
</Col>
<Col md={6} className='align-self-center'><p><br/>
Additionally, we refined our how-might-we statement to be <i>"how might we help gym-goers engage in friendly competition and build personal investment in their fitness journeys?"</i> This reframing helped to create a more concentrated focus so we could prototype more effectively.
</p></Col>
<Col></Col>
</Row>
<h2>Prototyping & user testing</h2>
<Row className='justify-content-center'>
<Col xs={6} md={7} className='align-self-center'><p>
From there, I created a <div className='keyword'>low-fidelity paper prototype</div> to test basic functionality and used <div className='keyword'>RITE testing</div> in order to improve upon it. We conducted 3 rounds of RITE testing in total, with each round being composed of 3 participants. After each round, the team would meet, discuss findings, and revise the prototype for the next round.
</p></Col>
<Col xs={4} md={2}><img src={Rite} alt="A digital low-fidelity prototype of Progre used during RITE testing." /></Col>
</Row>
<p>
</p>
<Row>
    <Col xs={6} md={3}><img src={Mb} alt="A moodboard for Progre, with lots of yellows and blues." /></Col>
    <Col xs={6} md={3}><img src={Style} alt="A style tile for Progre, with the font and color scheme for the app." /></Col>
    <Col md={6}>
<p><br/>After three rounds of RITE testing, we proceeded with creating a prototype of a higher fidelity, using <div className='keyword'>mood boards</div> and <div className='keyword'>style tiles</div> in order to create a <div className='keyword'>brand image</div>.
</p></Col>
</Row>

<h2>Presenting Progre</h2>
<p>
Thus, the gym gamification app Progre was born. Below are some of the features that I thoroughly tested and implemented into the prototype.
</p>
<Row>
<Col md={8} xs={9} className='align-self-center'><ul className='bulleted-1 bold-section'>
    <li>
<i>Avatars:</i> Each user is assigned an avatar. As the user books and attends gym appointments, their avatar levels up and evolves.  How an avatar evolves depends on its user’s gym appointments. For instance, a user who frequents the pool may grow fins, while a user who uses the climbing wall may become more “rocky.” With avatars, we aim to document personal growth in a manner that is whimsical, inclusive, and gender neutral.
    </li>
</ul></Col>
<Col md={3} xs={3} className='align-self-center'><img src={HomeImg} alt="The home screen of Progre." /></Col>
</Row>
<Row>
    <Col md={3} xs={3} className='align-self-center'><img src={CheckinImg} alt="The check-in screen of Progre." /></Col>
    <Col md={8} xs={9} className='align-self-center'><ul className='bulleted-1 bold-section'><li>
<i>QR check-in:</i> The gym-going process should be as seamless as possible and allow gym-goers to focus on what excites them: working out. Instead of having gym-goers juggle their health forms, ID card, gym slot information, and personal belongings, by including such information in the prototype itself through a QR code check-in, we allow for a stress-free and contact-free way of checking into their gym appointment.
    </li></ul></Col>
</Row>
<Row>
    <Col md={8} xs={9} className='align-self-center'><ul className='bulleted-1 bold-section'>
    <li>
<i>Leaderboard and social feed:</i> While gym communities are unable to work out together in-person, the leaderboard gives them the opportunity to engage in friendly competition. Reset each month, the leaderboard shows how you rank in gym attendance among your friends and the broader Stanford community.
    </li></ul>
    </Col>
<Col md={3} xs={3} className='align-self-center'><img src={LeaderboardImg} alt="The leaderboard screen of Progre." /></Col>
</Row>

{/* 
<h2>Values & ethics</h2>
<p>
When building our prototypes we wanted to make sure accessibility, inclusivity and privacy were central in our designs. Specifically, our team focused on making sure that anyone, regardless of gender, physical build, and capabilities, would feel welcomed and celebrated in our app.
</p>
<Row>
    <Col>
<h3>Positive Affirmation</h3>
<p>
Referencing apps like Duolingo and Peloton, our test participants described how positive affirmation in comparator apps keep them motivated. Let’s say a user misses a number of workouts. Rather than showing a dip in daily statistics, Peloton, for instance, will choose to celebrate the user’s weekly attendance (i.e. You’ve exercised the past 10 weeks! Keep it up!).
Throughout the needfinding and testing process, we heard from participants that positive incentives for gym-going far outweigh punishments for missing gym appointments.
</p>
    </Col>
    <Col>
<h3>Accessibility and Inclusivity</h3>
<p>
We designed our app with accessibility and inclusivity in mind. Our avatars are designed to only evolve upward; missing appointments will not cause avatars to level-down or devolve. Additionally, on our app’s home page, we celebrate a gymer’s wins in a motivational card (modeled off Peloton).
</p> 
    </Col>
</Row> */}
<Row className='justify-content-center'>
<Col xs={3} md={2}><img src={AvaCheer} alt="" /></Col>
</Row>

<h3>Targeting user groups</h3>
<p>
Because we are creating an app to serve all Stanford students and staff members, we wanted to create an inclusive space that welcomed and celebrated people of all backgrounds. In particular, we made deliberate design choices for the following groups:
</p>
<Row>
<Col md={5}><p><i>Novice gym goers:</i> From our user interviews it was revealed that beginner gym goers value seeing their personal growth and receiving qualitative feedback. Through our avatars and individual user profiles, beginners are able to visualize their consistent gym behaviors. 
</p><p><i>Veteran gym goers:</i> Our interviews revealed that more experienced gym goers had a strong preference to see quantitative feedback and were primarily motivated by friendly competition. Through our leaderboard and public news feeds, these users have the opportunity to compete with their friends and expand their social network outside of their traditional friend group. 
</p></Col>
<Col md={3}>
<i>All genders:</i> The traditional gym experience is often hypermasculinized and can be very intimidating for other genders. Consequently, we include gender-neutral styling so that our app will be welcoming for all. You’ll notice that our font, color choice, and avatar design are neither overtly feminine nor masculine. 
</Col>
<Col md={4}><p><i>People of all body sizes:</i> We wanted to make sure that our app encouraged people of all body shapes to engage in the gym. Consequently, we chose non-human avatars instead of real photos to focus on a user’s personal growth rather than their actual body shape. 
</p><p><i>People with disabilities:</i> Our team also wanted to make sure that people with disabilities felt welcomed on the app. For students who may be in a wheelchair or have any other physical disability, we included an accommodation request option in the booking process.
</p></Col>
</Row>
<h2>Prototype</h2>
<Row className='justify-content-center'>
<Col md={7}>
<img src={Prototype} alt="A picture of Progre's Figma prototype." /><p><br/>
The final prototype for Progre can be accessed <a href='https://www.figma.com/proto/yrFO3PQPxD3Zk7SHqQd9bk/Final-Progre-Prototype?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A970&node-id=10%3A970'>here, through Figma.</a><img className='end-article' src={EndImg} alt="" />
</p></Col>
</Row>


                </Col>
            </Row>
<Next next="Develop For Good" subtitle="Branding for the Next Generation of South Bronx United" link="develop-for-good#top" />
<Back location="portfolio" className='back-bottom' />


        </Container>
        <br/>
        <div className="attribution">
<p>Stock images <a href="http://www.freepik.com">designed by Freepik</a>.</p>
</div>        
    </div>
  )
}

export default Progre
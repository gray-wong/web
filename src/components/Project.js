import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/header.png'

const Project = () => {
  return (
    <div>
        <Container className='cont proj'>
            <Back location="/" /><br/>
            <Row className='proj-header'>
                <Col md={6}>
                <h1>Progre</h1>
                </Col>
                <Col md={6} className='align-self-center'>
                <ul className='proj-stats'>
                    <li>01.01.2021</li>
                    <li>CS 247S: Service Design</li>
                    <li>Project Manager</li>

                </ul>
                </Col>
            </Row>
            <img src={HeaderImg} className='header-img' />
            <Row className='proj-desc'>
                <Col>
                <p>Table of contents</p>
                <h2>Needfinding & synthesis</h2>
<p>
In CS 247S: Service Design under Professor Julie Stanford, I led a team to examine the space of fitness during COVID-19 and the stress that pandemic policies place on the fitness experience. To start off, I created an interview guide targeting four main actor types: gym-goers, fitness instructors, gym staff, and gym administration. It was important to us to include as many types of stakeholders as possible so as to get a comprehensive understanding of what problems that the pandemic caused in the realm of gyms. Additionally, to ensure a thorough understanding of gym experiences, the interview guide included different <div className='keyword'>tours and exercises</div> so that interviewees could walk us through <i>how</i> exactly they experience gyms and what exactly they do in gym spaces, instead of quizzing on general past experiences, frustrations, and feelings.
</p>
<p>
After recruiting 8 interviewees (2 per actor type) and conducting interviews, we synthesized. From the interviews, we created <div className='keyword'>journey maps</div> per actor, generated <div className='keyword'>insights</div> per actor, an overall <div className='keyword'>grounded theory for</div> all actors and sub-theories per actor type, and brainstormed a number of <div className='keyword'>how-might-we statements</div>.
</p>
[journey map images]
<p>
Here’s a summary of what I learned and theorized:
<blockquote><br />
Each actor’s needs and restrictions were not necessarily well understood by the other actors in the space of the gym. Policies are handed down from administrators to gym managers, gym staff, gym-goers and fitness instructors respectively; these latter actors were frustrated or discouraged because their needs to exercise and create spaces to exercise were not being met and/or ideas not heard. This communications gap accounted largely for the discontent in AOERC and the fitness community, even though actors shared a similar core motivation: <i>keeping students/themselves safe and well during COVID-19</i>.
</blockquote>
</p>
<p>
Additionally and notably, we noted that gym staff, fitness instructors, and gym-goers tended to have overlaps in their interviews: they wanted to use fitness and gyms as a means to <i>uplift others and to stay healthy</i>, however <i>barriers</i>—physical and mental—prevented them from doing so. For some, it was the challenge of technology. For others, it was a lack of commitment and gym appointments being wasted because of no-shows.
</p>
<h2>Ideation</h2>
<p>
Among the <div className='keyword'>how-might-we statements</div> we developed individually and as a team, the following two stood out to us as ones that resonated with us:
</p>
<ul>
    <Row>
        <Col>
        <li>How might we empower busy students across various regions to engage with the natural world in meaningful ways?</li>
        </Col>
        <Col>
        <li>How might we encourage meaningful gym slot booking and minimize no-shows?</li>
        </Col>
    </Row>
</ul>
<p>
To answer how-might-we statements, we utilized <div className='keyword'>blue sky and dark horse thinking</div> to brainstorm and ideate, coming up with an idea that we pursued: gym gamification.
[miro board]
</p>
<h3>Rapid experimentation</h3>
<p>
I tested the premise of this idea through <div className='keyword'>rapid experimentation</div>, creating an experiment planning worksheet. The underlying assumption of this idea was that Stanford Wellness and Recreation can encourage more mindful appointment booking behavior by gamifying the process to add personal investment and stakes via an avatar, as well as a social and competitive aspect through rankings and virtual competitions between avatars.
</p>
<p>
To test this, I recruited three participants of different gym-going demographics (old versus young gym-goers, casual versus committed gym-goers) and asked each of them to create a custom avatar. I then asked participants to contact me when they engaged in gym-related activities (namely booking and going to gym appointments), and I would send them back a picture of their leveled-up avatar upon each successful interaction.
</p>
<p>
From this, I learned that:
</p>
<ul>
    <li>Avatar creation is something that can resemble ourselves, but doesn’t have to be human. While many avatars today focus on cartoonish representations of ourselves, avatars that are viewed as <i>pets and something to project onto can be useful to harness a sense of investment</i>.</li>
    <li>Gym-goers felt encouraged by avatar growth. One participant wondered, “How is my effort going to be represented here? [...] It felt like I could <i>see change [with my avatar]</i>.”</li>
    <li>For gym-goers that went with a gym buddy, <i>the presence of others and feeling supported</i> increased their motivation and commitment to fitness.</li>

</ul>
<h3>Building context</h3>
<p>
These insights did indeed support the premise of the experiment, so we proceeded with this idea, creating a <div className='keyword'>blueprint</div> for how we imagined the prototype to be used, a <div className='keyword'>molecule diagram</div> to better contextualize the idea, and various <div className='keyword'>concept sketches</div> to flesh out what features to include.
</p>
[blueprint]
[molecule]
[concept sketches]
<h2>Prototyping & user testing</h2>
<p>
From there, I created a <div className='keyword'>low-fidelity paper prototype</div> to test basic functionality and used <div className='keyword'>RITE testing</div> in order to improve upon it. We conducted 3 rounds of RITE testing in total, with each round being composed of 3 participants. After each round, the team would meet, discuss findings, and revise the prototype for the next round. All RITE testing findings can be seen [here] and are organized by the observation, its corresponding nitpick, and the underlying need for that nitpick. After three rounds of RITE testing, we proceeded with creating a prototype of a higher fidelity, using <div className='keyword'>mood boards</div> and <div className='keyword'>style tiles</div> in order to create a <div className='keyword'>brand image</div>.
</p>
[mood boards] [style tile]

<h2>Presenting Progre</h2>
<p>
Features:
</p>
<ul>
    <li>
<i>Avatars:</i> Each user is assigned an avatar. As the user books and attends gym appointments, their avatar levels up and evolves.  How an avatar evolves depends on its user’s gym appointments. For instance, a user who frequents the pool may grow fins, while a user who uses the climbing wall may become more “rocky.” With avatars, we aim to document personal growth in a manner that is both whimsical and inclusive and gender neutral. Evolving based on gym attendance, as opposed to personal records, rewards commitment versus ability — this keeps our app beginner-friendly and accessible to gymers with disabilities. Additionally, avatars, as opposed to photo profiles, remove the potential for body-image triggers.
    </li>
    <li>
<i>Leaderboard and social feed:</i> While gym communities are unable to work out together in-person, the leaderboard gives them the opportunity to engage in friendly competition. Reset each month, the leaderboard shows how you rank in gym attendance among your friends, or the broader Stanford community.
    </li>
    <li>
<i>QR check-in:</i> The gym-going process should be as seamless as possible and allow gym-goers to focus on the aspect of the gym that excites them: working out. However, one gym-goer we interviewed mentioned that there were quite a few parts that they had to keep track of in their gym-going process, including health forms, their ID card, slips informing them of their pool lane, and more, in addition to their own gym-going supplies and clothes. We decided that one way to pare down the amount of items to account for would be by including such information in the prototype itself, as a go-to for all things gym. Health forms and other information would be documented by the user in their settings, and we created a QR code check in that would convey such information while also minimizing contact with surfaces for the gym-goer. Putting these together, there are less physical parts for users to grapple with, so they can wholly focus on exercising.
    </li>
</ul>
<h2>Values & ethics</h2>
<p>
When building our prototypes we wanted to make sure accessibility, inclusivity and privacy were central in our designs. Specifically, our team focused on making sure that anyone, regardless of gender, physical build, and capabilities, would feel welcomed and celebrated on our app.
</p>
<Row>
    <Col>
<h3>Positive Affirmation</h3>
<p>
Referencing apps like Duolingo and Peloton, our test participants described how positive affirmation in comparator apps keep them motivated. Let’s say a user misses a number of workouts. Rather than showing a dip in daily statistics, Peloton, for instance, will choose to celebrate the user’s weekly attendance (ie. You’ve exercised the past 10 weeks! Keep it up!).
Throughout the needfinding and testing process, we heard from participants that positive incentives for gym-going far outweigh punishments for missing gym appointments.
</p>
    </Col>
    <Col>
<h3>Accessibility and Inclusivity</h3>
<p>
We designed our app with this in mind. Our avatars are designed to only evolve upward; missing appointments will not cause avatars to level-down or de-volve. Additionally, on our app’s home page, we celebrate a gymer’s wins in a motivational card (modeled off Peloton).
</p> 
    </Col>
</Row>

<h3>Targeting user groups</h3>
<p>
Because we are creating an app to serve all Stanford students and staff members, we wanted to create an inclusive space that welcomed and celebrated people of all backgrounds. In particular, we made deliberate design choices for the following groups:
</p>
<ul>
    <li>
    <i>Novice gym goers:</i> From our user interviews it was revealed that beginner gym goers value seeing their personal growth and receiving qualitative feedback. Through our avatars and individual user profiles, beginners are able to visualize their consistent gym behaviors. 
    </li>
    <li>
    <i>Veteran gym goers:</i> Our interviews revealed that more experienced gym goers had a strong preference to see quantitative feedback and were primarily motivated by friendly competition. Through our leaderboard and public news feeds, these users have the opportunity to compete with their friends and expand their social network outside of their traditional friend group.
    </li>
    <li>
    <i>All genders:</i> The traditional gym experience is often hypermasculinized and can be very intimidating for other genders. Consequently, we include gender-neutral styling so that our app will be welcoming for all. You’ll notice that our font, color choice, and avatar design are neither overtly feminine nor masculine. 
    </li>
    <li>
    <i>People of all body sizes:</i> We wanted to make sure that our app encouraged people of all body shapes to engage in the gym. Consequently, we chose non-human avatars instead of real photos to focus on a user’s personal growth rather than their actual body shape. 
    </li>
    <li>
    <i>People with disabilities:</i> Our team also wanted to make sure that people with disabilities felt welcomed on the app. For students who may be in a wheelchair or have any other physical disability, we included an accommodation request option in the booking process.
    </li>
</ul>
<h3>Privacy</h3>
<p>
By creating a community for gymers we wanted to make sure that users felt that their information was kept private. Many people may feel insecure about their gym activity, so we wanted to ensure that there were safeguards in place to make sure that user’s data would not be made public. In our app we have two views for both the homepage and the leaderboard page. The first, default view of the page is the friends-only view; this view only shows you content from your friends and consequently all of your information is only shared with them. The second view is a global view which allows users to view and share content with the greater Stanford community. The global view incentivizes users to build new connections and better understand the gym community. When a user first makes an account, the user will automatically opt-out of sharing their data globally and instead will be set to friends-only mode. Additionally, users can make their profile completely private in the settings.
</p>

The final Figma prototype of the app can be accessed here. [link]


                </Col>
            </Row>
            
        </Container>
        
    </div>
  )
}

export default Project
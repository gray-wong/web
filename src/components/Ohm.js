import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/ohm/header.jpg'
import Door from '../assets/images/ohm/door.png'
import Concept from '../assets/images/ohm/concept.png'
import Walk from '../assets/images/ohm/walk.gif'
import Flashback from '../assets/images/ohm/flashback.png'
import Interact from '../assets/images/ohm/interactleft.png'
import Level from '../assets/images/ohm/full.png'
import EndImg from '../assets/images/end-1-green.png'
import Next from './Next'


const Ohm = () => {
  return (
    <div>
        <Container className='cont proj'>
            <Back location="portfolio" /><br/>
            <Row className='proj-header'>
                <Col md={6}>
                <h1>Old<br/>Hastings<br/>Manor</h1>
                </Col>
                <Col md={6} className='align-self-center'>
                <ul className='proj-stats'>
                    <li>01.01.2021</li>
                    <li>CS 247G: Introduction to Game Design</li>
                    <li>Design lead</li>
                </ul>
                </Col>
            </Row>
            <img src={HeaderImg} className='header-img' />
            <Row className='proj-desc'>
                <Col>
                <p>Table of contents</p>
                <h2>Synopsis</h2>
<Row>
<Col lg={6}>
<p>
Welcome to the Old Hastings Manor, the original residence of a once-powerful baron in 1800s New England. Long ago, you served as the baron’s esteemed advisor. The baron was a cruel, greedy man, but no one ever stood up to his dastardly plans. Not even you.</p>
<p>
Now, curiously, you find yourself back in the manor, but in the body of a squirrel. For it’s not a manor at all, not really—it’s your personal purgatory.</p>
<p>
As a squirrel, you must navigate the once- familiar manor as you piece together clues and unlock flashbacks littered around the estate—items and echoes of the past—that slowly begin to remind you of the human you once were. Why are you a squirrel? Who is the Baron, really? And why is everything frozen?</p>
<p>
Solving puzzles throughout the manor will unlock the answers you seek, as you travel from room to room, and experience more of your memories, slowly unveiling the dark truth of your past life.
</p>
</Col>
<Col><img src={Door} /></Col>
</Row>
<h2>Visual design</h2>
<Row>
<Col>
<img src={Concept} />
</Col>
<Col><p>
In creating Old Hastings Manor, I took charge of the <div className='keyword'>visual design</div> of the game as the design lead, creating concept sketches, game assets, and animations all while curating the environment of the game to be a spooky yet introspective atmosphere.
</p>
</Col>
</Row>

<p>
To do so, I created a cool-themed and low saturation color palette to evoke a sense of desolation and deterioration. I used canvas textures while creating these assets to emphasize the run-down state and eeriness of the manor. I also applied blurring to assets in order to lend a sense of perspective and also mystery.
</p>
[images]
<h2>Playtesting & iteration</h2>
<p>
To ensure that the game ran smoothly, we ran our work-in-progress <div className='keyword'>vertical slice</div> of the game through 3 rounds of <div className='keyword'>playtesting</div>, making revisions accordingly.
</p>
<h3>Playtesting, round 1</h3>
<p>
The first round of playtests focused on the mechanics of the game, namely the movement of the squirrel, and critiquing the rough game environment that I had set up. Since there were many components that went into this first playtest—level design and environment illustrations, character designing and animations, and learning the Godot game engine—our main focus for this playtest was to pinpoint the beginnings of any pain points and to reinforce anything that players enjoyed.
</p>
<p>
We were able to conduct four independent rounds of playtests during this session, with the participants being our own classmates. We primarily found that there were many difficulties in beginning the game, as well as visibility concerns. Upon loading, the game would position the squirrel directly behind a pillar, making it hard to initially discern where our protagonist was.
</p>
<p>
Additionally, many players were unsure of the controls of the game, but were able to find their footing after experimenting. We also received concerns about visibility of the squirrel; there were specific areas where the squirrel would tend to blend into the background, making navigating slightly difficult. More positive comments about the game included players enjoying the environment and also the fluidity of the movement.
</p>
<p>
To resolve the visibility issues that arose, we decided to rearrange the environment slightly so that pillars wouldn't obscure any areas of high traffic, and we also increased the contrast of the squirrel by overlaying it with orange to contrast the many blue hues of the background. Lastly, we determined that some onboarding was necessary so players understood what controls to use, although we had not quite yet decided what that would look like.
</p>
<Row>
<Col xs={3}><img src={Walk} /></Col>
</Row>
<h3>Playtesting, round 2</h3>
<Row>
<Col><img src={Flashback} /></Col>
</Row>
<p>
At the time of this playtest, we also had many more components in progress than we had completed, so for most of the playtest, we described the scope of what we hoped to implement to playtesters to gauge their reactions. Compared to the previous playtest, the primary difference in our slice besides the fixes to visibility was that we had added in pieces of firewood that would be involved in the level’s puzzle, although we had not yet implemented the functionality for the puzzle itself.
</p>
<p>
This playtest involved three independent sessions with classmates, one of which had not participated in the previous playtesting. Because a lot of our slice during this playtest was similar to the previous session, we again received complaints about the controls, exacerbated by the want to interact with the firewood. We also received some uncertainty about the fireplace being a fireplace.
</p>
<p>
More positively, we also asked players to imagine what the story might be given the atmosphere evoked, and responses were indeed aligned with our vision for the game. When we relayed what the premise of the game was and how the level was incorporated into it (along with details about the puzzle), we received positive feedback; players were hopeful about what the game would promise and intrigued to see what would happen.
</p>
<p>
In order to resolve the ongoing issue of controls, we decided to implement some onboarding instructions in which the controls to move and interact would be flashed at appropriate times before fading away once players were familiarized with how to move and interact. To resolve the issue of the fireplace, we decided to include a cutscene in the game before players begin the firewood puzzle in the hopes that it would lend context and draw attention to which objects should be interacted with and how. The cutscene had the added effect of introducing hints and whispers of a larger narrative to the players.
</p>
<p>
At this stage, among things that we were in the process of implementing were the cutscene animations, sound (diegetic sounds and voice acting for the level’s cutscene), and interaction mechanics and animations.
</p>


<h3>Playtesting, round 3</h3>
<p>
Between this playtest and the previous one, we had finally implemented the onboarding instructions, the cutscene, sound, and interaction. Consequently, the bulk of these playtests probed into how these elements benefitted or deterred players’ interaction with the game.
</p>
<p>
This round of playtests were conducted outside of class with friends and acquaintances of team members. These playtests showed a need for the controls to have some sort of staying power, as the onboarding images faded a bit too fast for players to process.
</p>
<Row>
<Col xs={1}><img src={Interact} /></Col>
</Row>
<p>
There was also some confusion about the objective after the cutscene played out, which was likely augmented by the uncertainty of whether the fireplace was indeed one. Because we had yet to implement a cue that signaled the end of the puzzle, we found that some players continued to put firewood in the fireplace. On a more positive note, players enjoyed the sound design and how it augmented and amplified the tones we wanted to evoke.
</p>
<p>
To resolve the onboarding pain point, we prolonged the period of time that the onboarding images appeared for, and to also position each onboarding image at appropriate times. The buttons-to-press now appear when a player is within reach of the interactable items (i.e. the firewood and the door).
</p>
<p>
To address post-cutscene lack of direction, we are planning on perhaps borrowing from point-and-click games—interacting with objects would lead to seeing the squirrel’s internal dialogue, which would include hints on what players should focus on. We also implemented a visual cue of the melted door opening, which would hopefully signal the end of the puzzle and resolve any confusion there.<img className='end-article' src={EndImg} />
</p>
                </Col>
            </Row>
<Next next="Design Gallery" subtitle="Piloting the Beginning of Research" link="/design-gallery" />
            
        </Container>
        
    </div>
  )
}

export default Ohm
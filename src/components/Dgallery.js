import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Back from './Back'
import './Project.scss'
import HeaderImg from '../assets/images/design-gallery/header.jpg'
import EndImg from '../assets/images/end-1-green.png'
import Pheader from './Pheader'
import Next from './Next'
import { motion, useAnimation } from 'framer-motion'
import Interface from '../assets/images/design-gallery/interface.png'
import MedFi from '../assets/images/design-gallery/med-fi.png'
import MedFiDetails from '../assets/images/design-gallery/med-details.png'
import Knowledgeq from '../assets/images/design-gallery/knowledge-q.png'
import Knowledgea from '../assets/images/design-gallery/knowledge-a.png'
import Feedback from '../assets/images/design-gallery/gallery-feedback.png'


const Dgallery = () => {
  return (
    <div id="top">
        <Container className='proj cont'>
          <br/>
        <Back className='back-top' /><br/>
            <Pheader name="Design Gallery" date="06/2021 - 08/2021" subtitle="UCSD Design Lab" role="Design Lead" />
            <img src={HeaderImg} className='header-img' alt="An image collage of a classroom of students, people gathered around a computer, a desktop showing the Design Gallery, and the desk of a designer. There are a few design patterns spanning across the page." />
            <Row className='proj-desc'>
                <Col>
                <h2>Overview</h2>
<Row>
    <Col md={6}>
<p>
Under Dr. Grace (Yu-Chun) Yen and Professor Steven Dow of the University of California, San Diego's Design Lab, I had the privilege of wrangling my classroom knowledge for use in a more formal academic format. My work on the Design Gallery is part of Dr. Yen's ongoing research project investigating the ways to better scaffold learning in classrooms through a <div className='keyword'>vicarious learning model</div>, where students learn through the experiences of others in a classroom and are able to learn in a collaborative manner. For example, in a design class, this might take the form of a design critique session; students can learn not only from their own design being critiqued, but from their peers' works being critiqued.
</p>
<p>
But how might we be able to port this experience for learning outside of a classroom? How can we make education more accessible for people who might not have the resources to attend such classes? We simulate it!
</p>
    </Col>
    <Col md={6}>
<p>
Design Gallery builds off of vicarious learning by providing past students' design iterations and received critique along with ratings of how well a design did on a core design concept. This allows the gallery to turn the abstractness of design into more <i>concrete principles</i> that are easier to digest for novices. By compiling all of these into a gallery that can be filtered and sorted for convenience, we then provide beginners with a tool through which they can access the learned knowledge of those before them and improve through <i>assisted exploration</i> and <i>relevant examples</i>.
</p>
<p>
This research project is still ongoing, however we hypothesize that by providing an education-focused design gallery, learning design (and other such abstract disciplines) may become more intuitive and easier by better scaffolding the learning process. This article offers a brief peek at the gallery and what we have been working on!
</p>
    </Col>
</Row>

<h2>Wireframing & Prototyping</h2>
<Row className='justify-content-center'>
<Col xs={12} md={6} className='align-self-center'><p>Based on Dr. Yen’s previous research, I created <div className='keyword'>wireframes</div> and a <div className='keyword'>medium-fidelity prototype</div> of the Design Gallery, refining it through Dr. Yen and Professor Dow’s feedback during daily standup meetings. Specifically, we hoped to focus on creating a user experience of the gallery that was both informative and straightforward so that the gallery could be outfitted for learning with ease.</p>
<p>There were three main components of the gallery experience: <i>browsing the gallery (including applying search filters), viewing a gallery item, and reflecting on designs</i>. To reflect this, I created pages accordingly, including a main design repository with a filter sidebar, individual design iteration process with feedback, and a favoriting flow along with a page to view favorited designs.</p>
</Col>
<Col xs={5} md={3} className='align-self-center'><img src={MedFi} alt="Some images of the medium-fidelity prototype." /></Col>
<Col xs={5} md={3} className='align-self-center'><img src={MedFiDetails} alt="" /></Col>

</Row>
<h3>User testing sessions</h3>
<p>
Putting the medium-fidelity design to the test, I led six sessions of <div className='keyword'>user testing</div> and a lab-wide <div className='keyword'>feedback session</div> involving other professors, postdoctoral researchers, PhD students, and interns. These sessions helped to resolve areas of confusion and uncertainty in filters, gallery features, and the interface. Because I formatted the user testing to take advantage of the <i>think-aloud protocol</i>, I was also able to give the team context on how the gallery might be used in a more natural setting, free from any proctors.
</p>
<Row>
<Col md={6} className='align-self-center'><img src={Feedback} alt="A Miro board of feedback, organized based on color and topic." /></Col>
<Col><p>
Compiling findings, I found that:
</p>
<p className='bold-section'>While a repository format is familiar to many participants, changes in its typical usage tend to be <i>unfamiliar</i>. Participants are unused to a repository that shows a progression of the state and a gallery that attempts to teach.
<br/>Participants tend to hesitate to use unfamiliar filters, and too many unfamiliar filters tend to cause participants stress; with <i>too many foreign options</i>, it becomes hard to choose what to use.
<br/>Users did not expect to see feedback in between design iterations, especially since most design repositories do not show <i>changes</i> in designs and since <i>feedback</i> typically is not solicited or given so openly.</p>
</Col>
</Row>
<p>These takeaways indicate that there is indeed an education gap in teaching design and that a lot of learning design outside of classrooms happens on the individual level, independently. As a result, changes to the prototype were made to prime the user to take interest in probing different designs and learning more about design in general, such as through suggested topics for exploration and prioritizing principle filters over surface-level ones.</p>
<h3>Design Gallery features</h3>
<Row>
<Col md={5}>
After revisions and rigorous testing, a high-fidelity prototype was created. Overall, the Design Gallery boasts the following features:<br/>
<ul className='bulleted-1 bold-section'>
    <li>First and final iterations of past student work</li>
    <li>Feedback from experts categorized and tagged by design principles and sub-topics</li>
    <li>Expert ratings and critique to understand why students made the changes they did</li>
    <li>Content filtering, sorting, and suggestions to find relevant examples easily</li>
    <li>Favoriting and note-taking systems to allow for active self-reflection while browsing</li>
    <li>Submission system to contribute your own work to the vicarious learning experience</li>
</ul>
</Col>
<Col md={7}>
<img alt="The high-fidelity prototype of the Design Gallery."
    src={Interface}
/></Col>
</Row>

<h2>Pilot testing</h2>
<p>The overall format of the research study involves analyzing change before and after exposure to the Design Gallery, particularly in terms of design prowess. To that end, we required some quantifiable metric of measuring design knowledge. Thus, I developed a <div className='keyword'>design knowledge assessment</div> to differentiate between “experts” and “novices” at design.
</p>
<h3>Design knowledge assessment</h3>
<Row className='justify-content-center'>
<Col lg={4}>
<img alt="An example of a question from the design knowledge assessment."
    src={Knowledgeq}
/>
</Col>
<Col lg={5}><p>
To create a design knowledge assessment, I compiled a number of designs created by design novices and by design experts and formed two different types of questions on the assessment. The first paired two designs and asked participants to rate which design performed better. The second featured only one design and asked participants to rate how well the design performed on each principle. Both question types were based on a seven-point Likert scale to allow for numerical analysis in the form of t-tests.
</p></Col>
</Row>
<Row className='justify-content-center'>
    <Col md={8}><p>
I then recruited <i>11 self-proclaimed design novices through Mechanical Turk, 4 self-proclaimed design novices from UCSD, and 5 self-proclaimed design experts through contacts from the UCSD Design Lab</i> and had both groups take the assessment. From there, I revised the assessment to only contain questions that had a marked difference in opinion between novices and experts, which was determined through <div className='keyword'>the p-value of the t-test</div>, <div className='keyword'>standard deviation</div>, and <div className='keyword'>range</div> for each question.
</p></Col>
<Col md={4}>
<img alt="Analytics for choosing questions for the assessment."
    src={Knowledgea}
/>
</Col>
</Row>

<h3>Pilot test sessions</h3>
<p>
After the creation of the assessment, we were set for running our first set of <div className='keyword'>pilot tests</div>! I had the pleasure of leading one round of pilot testing to identify areas of potential friction and any issues that might arise while undergoing the study. The research study process is as follows:
</p>
[diagram]
<p>
Because the Design Gallery was still in the process of being created, we instead used Behance during the pilot tests as a means of offering a similar experience while still honing in on gaps in design education; <i>how might learning from our gallery's experience differ from learning through a typical and mainstream gallery?</i>
</p>
<Row className='justify-content-center bold-section'>

    <Col md={4}><li>
    From the first round of pilot tests, I learned that most design repository websites are just that—repositories. Participants mentioned the difficulty of finding and identifying designs that were not only relevant to the context of what they were creating, but were also inspirational and creative.
    </li>
    </Col>
    <Col md={4}><li>
    I also observed how difficult the idea of revision is for novices; when presented with the revision phase of their design, they struggled to know how exactly to approach revising their design and would typically do surface-level cosmetic changes to it, such as changing the background color, text alignment, sizing, and so on.
    </li>
    </Col>
    <Col md={4}><li>
    Additionally, reflection was important to the participants—they spent a good amount of time on each of the reflection sections of the study and were often able to generate insightful comments about their design independently, just from reviewing the designs of others or their own design.
    </li>
    </Col>

    {/* <Col md={9}> */}

    
    
    


  </Row>
<p>
While the research is still in-progress, we believe that these preliminary results of the pilot test sessions do help to support our research and the idea that there is a gap in how we approach design education and education in general and how we might be able to scaffold this gap. <img className='end-article' src={EndImg} alt="" />
</p>
                </Col>
            </Row>
<Next next="Progre" subtitle="Fit for the Future: Service Design with Stanford Recreation and Wellness" link="progre#top" />
<Back location="portfolio" className='back-bottom' />

        </Container>
        <br/>
        <div className="attribution">
<p>Stock images <a href="http://www.freepik.com">designed by Freepik</a>.</p>
</div>  
    </div>
  )
}

export default Dgallery
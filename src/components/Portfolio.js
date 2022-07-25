import React from 'react'
// import ReactDOM from 'react-dom'
import { Container } from 'react-bootstrap'
import Entry from './Entry'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <Container className='cont portfolio g-0'>
      <br/>
      <br/>
        <h1>Portfolio</h1>
        <h2>case studies</h2>
        {/* <Entry num="01." project="Design Gallery" tags={["design", "wireframing", "prototyping", "quantitative analysis", "quantifying study metrics", "pilot testing"]}/>
        <Entry num="02." project="Progre" tags={["project management", "needfinding", "stakeholder interviews/focus groups", "affinity mapping", "user journey mapping", "rapid prototyping", "wireframing", "UI design", "rapid user testing"]} />
        <Entry num="03." project="South Bronx United" tags={["design lead", "front-end web dev", "branding"]} />
        <Entry num="04." project="Stanford Design Week" tags={["project management", "front-end web dev", "logo design"]} />
        <Entry num="05." project="Pathways" tags={["design lead", "needfinding", "stakeholder interviews/focus groups", "wireframing", "u", "user testing", "user testing", "pitching to investors"]} />
        <Entry num="06." project="Old Hastings Manor" tags={["project management", "front-end web dev"]} />
        <Entry num="07." project="Accenture Interactive projects" tags={["project management", "front-end web dev"]} />
        <Entry num="08." project="Hearth Heart" tags={["project management", "user research", "user testing"]} /> */}
        <Entry className='portfolio-entry' num="01." project="Design Gallery" tags={["piloting the beginning of learning"]}/>
        <Entry className='portfolio-entry' num="02." project="Progre" tags={["getting fit for the future with stanford recreation and wellness"]} />
        <Entry className='portfolio-entry' num="03." project="Develop For Good" tags={["branding for the next generation of south bronx united"]} />
        {/* <Entry num="04." project="Stanford Design Week" tags={["project manager", "design is never just design"]} /> */}
        {/* <Entry num="05." project="Pathways" tags={["design lead"]} /> */}
        {/* <Entry className='portfolio-entry' num="04." project="Old Hastings Manor" tags={["artful mystery, spooky environments, and the ghost of interaction"]} /> */}
        <Entry num="04." project="Accenture Interactive" tags={["the twin projects of accenture malaysia"]} />
        {/* <Entry num="08." project="Hearth Heart" tags={["project manager"]} /> */}
    </Container>
  )
}

export default Portfolio

//"we'll get it rite the next time & other user testing findings"
//"academic user research and the science of learning"
//"in the fray of friendly front-end: police unions united"
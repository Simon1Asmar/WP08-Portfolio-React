import React from 'react'

import './AboutMe.css'

function AboutMe(props) {
  return (
    <section id='about-me'>
      <h1>{props.name}</h1>
      <p>{props.paragraph}</p>
    </section>
  )
}

export default AboutMe
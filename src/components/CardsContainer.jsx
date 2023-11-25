import React from 'react'

import './CardsContainer.css'
// import ProjectCard from './ProjectCard'

function CardsContainer(props) {
  return (
    <section className='card-container'>
      {props.children}
    </section>
  )
}

export default CardsContainer
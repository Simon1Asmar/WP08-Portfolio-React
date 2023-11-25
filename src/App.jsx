import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing Components
import Header from './components/Header'
import PageSection from './components/PageSection'
import BackgroundImg from './components/BackgroundImg'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

import { BsGithub } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BackgroundImg/>
      {/* Header (Nav bar) [Responsive for different screen sizes]*/}
      <Header>
        <a href="#">Simon G. Asmar</a>
        <ul>
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </Header>
      {/* Section[hero]: welcome message or tagline + background image*/}
      {/* <PageSection className="header-margin" id="hero-section"> */}
      <PageSection id="hero-section">
        <HeroSection tagline="From engaging 3D and 2D video games to immersive AR/VR adventures and dynamic web solutions, welcome to my world of endless possibilities."/>
      </PageSection>
      {/* Section[about]: info about me, skills and interests + (optional: add timeline of your journey) */}
      <PageSection id="about-section">
      </PageSection>
      {/* Section[projects]: at least 3 Cards (title, description, link) */}
      <PageSection id="projects-section">
      </PageSection>
      {/* Contact-us form */}
      <PageSection id="contact-section">
        <ContactForm/>
      </PageSection>
      {/* Footer: name and copyright + social media links */}
      <Footer name="Simon Asmar" copyrightYear="2023">
        <p>
          <a href="https://www.github.com/simon1asmar" target='_blank'><BsGithub/></a>
          &nbsp;<a href="https://stackoverflow.com/users/15034649/simongasmar" target='_blank'><FaStackOverflow/></a>
          &nbsp;<a href="https://g.dev/Simon1Asmar" target='_blank'><FaGoogle/></a>
        </p>
      </Footer>

      {/* 
        THINGS TO ADD:-
        - Social Media Icons
          - install react icons -v
        - Animations
      */}
    </>
  )
}

export default App

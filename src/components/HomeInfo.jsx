import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
) 

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Anna</span>
    </h1>
  ),
  2: (
    <InfoBox text="Heyyy!! See who I am and what I do" link="/about" btnText="Learn more" />
  ),
  3: (
    <InfoBox text="Come on! Check out my projects" link="/projects" btnText="Check out my portfolio" />
  ),
  4: (
    <InfoBox text="Wanna chat???" link="/contact" btnText="Let's chat" />
  )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
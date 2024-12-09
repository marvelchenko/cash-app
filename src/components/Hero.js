import { data } from '../components/data'

import React from 'react'

const Hero = () => {
  return (
    <div>
      <div
      className='bg-cover h-screen bg-center relative'
      style={{ backgroundImage: `url(${data[0].background})` }}>
    
        <div 
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70'>
        </div>
        <div
        className='relative z-10'>
        </div>
      </div>
    </div>
  )
}

export default Hero

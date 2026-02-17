import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section = () => {
  return (
    <div className='h-screen w-full bg-amber-50'>
      <Navbar/>
      <Page1Content />
    </div>
  )
}

export default Section
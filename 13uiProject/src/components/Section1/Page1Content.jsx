import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='px-18 pb-16 py-6 flex items-center justify-between gap-10 h-[90vh]  '>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content
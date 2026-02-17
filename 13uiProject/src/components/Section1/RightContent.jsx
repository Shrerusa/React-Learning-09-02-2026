import React from 'react'
import RightCard from './RightCard'
import useRightContextInfo from '../../contexts/rightContextInfo'

const RightContent = () => {
  const cards = useRightContextInfo();

  return (
    <div id='right' className='h-full w-3/4 rounded- flex flex-nowrap gap-7 overflow-x-auto'>
      {cards.map((card) => <RightCard key={card.id} data={card} />)}
    </div>
  )
}

export default RightContent
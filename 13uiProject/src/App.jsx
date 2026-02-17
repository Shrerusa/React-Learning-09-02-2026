import React from 'react'
import Section1 from './components/Section1/Section1'
import { RightContextProvider } from './contexts/rightContextInfo'

const App = () => {
  
const cardData = [
    {
      id: 1,
      img: 'src/assets/Rucha.png',
      tag: 'Graduate',
      colorBtn: '#CBC3E3',
      info: 'Rucha: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo sunt officiis cumque dolore! Amet.'
    },
    {
      id: 2,
      img: 'src/assets/dugu.png',
      tag: 'Doctor',
      colorBtn: 'lightseagreen',
      info: 'Dugu: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo sunt officiis cumque dolore! Amet.'
    },
    {
      id: 3,
      img: 'src/assets/Satu.png',
      tag: 'Clg Student',
      colorBtn: 'lightblue',
      info: 'Satu: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo sunt officiis cumque dolore! Amet.'
    },
    {
      id: 4,
      img: 'src/assets/Chiu.png',
      tag: 'Child',
      colorBtn: 'pink',
      info: 'Chiu: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo sunt officiis cumque dolore! Amet.'
    },
    {
      id: 5,
      img: 'src/assets/Arjun.png',
      tag: 'Student',
      colorBtn: '#F08080',
      info: 'Arjun: Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo sunt officiis cumque dolore! Amet.'
    }
  ]

  // console.log(cardData.map(card => card.id));
  

  return (
    <RightContextProvider value={cardData}>
    <Section1 />
    </RightContextProvider>
  )
}

export default App


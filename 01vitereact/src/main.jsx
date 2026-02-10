import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyApp() {
  return (
    <div>
      <h1>Custome App !</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherelement = (
  <a href="http://google.com" target="_blank" >Visit Google</a>
)

const anotherUser = "Chobe Rucha"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click me to visit google ',
  anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <App />

  reactElement

);
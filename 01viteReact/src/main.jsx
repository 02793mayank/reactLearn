import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Myfunction from './myfunction.jsx'

function MyApp(){
  return 
  <h2>this direct app</h2>
}
const ReactELement={
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
     <App/>
      <Myfunction/>
      <MyApp/>
      <h4>we can only render one tag so we sum up all the tags in one empty tag</h4>
      ReactELement
    </>
  </StrictMode>,
)

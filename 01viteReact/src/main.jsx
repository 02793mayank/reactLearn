import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App/>
      <Myfunction/>
      <h4>this is we can only render one tag so we sum up all the tags in one empty tag</h4>
    </>
  </StrictMode>,
)

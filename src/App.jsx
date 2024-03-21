import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>React Form Handling</h2>
      <br />
      <StatefulForm></StatefulForm>
      {/* <SimpleForm></SimpleForm> */}
    </>
  )
}

export default App

import React, {useState} from 'react'

// Simplified arrow function
const ArrowFunction = params =>
  <div>
    <h1>I am arrow function</h1>
  </div>

function CompA() {
  return (
    <>
      <ArrowFunction />
      <h1>CompA</h1>
      <p>Hello component A</p>
    </>
  )
}

class CompC extends React.Component {
  render() {
    return (
      <>
        <h1>CompC</h1>
      </>
    )
  }
}

// use state returning array
const HomePage = () => {
  const valueState = useState();
  return (
    <>
      valueState = { valueState[0] }
      <h1>Hello World</h1>
      <CompA />
    </>
  )
}

export default HomePage;
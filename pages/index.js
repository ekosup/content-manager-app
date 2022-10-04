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
  // const valueState = useState();  // if we assign value state like on the side, then
  // console.log(valueState);  // should return array of [undefined, f]
  // console.log(valueState[0]);  // should return undefined

  // const valueState = useState(10);  // assign 10 to valueState
  // const value = valueState[0];
  // const setValue = valueState[1];

  const [value, setValue] = useState(10);  // assign 10 to valueState
  // debugger // this command will stop the executable on the web

  // each change of state will make the whole function being run from the beginning
  console.log("I am called initially and will be called each time the state changed.")

  const incrementValue = () => {
    setValue(value + 1);
  }

  return (
    <>
      Current value = { value }
      <button onClick={incrementValue}>+</button>
      <button>-</button>

      <CompA />
    </>
  )
}

export default HomePage;
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

  // state = {
  //   value: 10,
  // }

  // actually every react class component has their own constructor from super
  constructor() {
    super();
    this.state = {
      value: 10,  // it is the same example as above except we need to call super() function 
    }
  }

  changeState(newValue) {
    this.setState({
      value: newValue,
    })
  }

  // ntms: everytime state changes the whole function will be reexecuted
  render() {
    // const value = this.state.value; // is the same as
    const { value } = this.state;
    // using above notation we can decompose as many as state parameter to their own variables
    // e.g. const { value, a, b, c} = this.state;  // with state = {value:10, a:9, b:8, c:7}

    return (
      <>
        <h1>CompC</h1>
        Current value = { value }
        <button onClick={() => this.changeState(value+1)}>+</button>
        <button onClick={() => this.changeState(value-1)}>-</button>
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
  // debugger // this debugger command stop the executable on the inspector like adding checkpoint on code

  // each change of state will make the whole function being run from the beginning
  console.log("I am called initially and will be called each time the state changed.")

  // const incrementValue = () => {
  //   setValue(value + 1);
  // }

  // We can make both increment and decrement into one function below
  // const valueChange = (incrementor) => {
  //   setValue( value+incrementor );
  // }
  
  // or even better we can just make it inside the onClick method which returning an arrow function
  return (
    <>
      Current value = { value }
      <button onClick={() => setValue(value+1)}>+</button>
      <button onClick={() => setValue(value-1)}>-</button>

      <CompC />
    </>
  )
}

export default HomePage;
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function CompA() {
  return (
    <>
      <h1>CompA</h1>
      <p>Hello component A</p>
      <CompB />
    </>
  )
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello component B</p>
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

// If we are not using JSX
function CompD() {
  return React.createElement("h1", null, "Hello from react")
}

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <CompA />
      <CompC />
      <CompD />
    </>

  )
}

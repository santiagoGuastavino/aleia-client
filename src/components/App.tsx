import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Hero from './Hero'
import './styles.css'

export default function App (): JSX.Element {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
      <Navbar
        handleClick={handleClick}
      />
      <Header />
      <Hero />
    </>
  )
}

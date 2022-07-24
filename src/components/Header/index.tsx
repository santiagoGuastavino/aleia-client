import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Header () {
  return (
    <header className='header'>
      <h2 className='header-title'>
        We are an award winning interior design Agency
      </h2>
      <button className='header-button'>
        View all properties
        <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </header>
  )
}

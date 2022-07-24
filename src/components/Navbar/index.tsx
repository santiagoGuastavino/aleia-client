import React from 'react'
import './styles.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

interface Props {
  handleClick: () => void
}

export default function Navbar ({ handleClick }: Props) {
  return (
    <nav className='navbar'>
      <div className='img-box'>
        <img src={logo} alt='logo' />
      </div>
      <div className='burger-box'>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </div>
    </nav>
  )
}

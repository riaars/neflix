import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [show, handlShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handlShow(true)
      } else handlShow(false)
    })

    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  )
}

export default Navbar

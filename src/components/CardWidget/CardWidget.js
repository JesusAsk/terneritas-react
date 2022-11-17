import React from 'react'
import logo from '../../assets/shoppingCard.jpg'
import './CardWidget.css'

const CardWidget = () => {
  return (
    <div className='menu-navbar__logo'>

        <img className='menu-navbar__img' src={logo} alt='cart widget' />

    </div>
  )
}

export default CardWidget
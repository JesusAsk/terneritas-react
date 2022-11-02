import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'



const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'> Carniceria y granja Las Terneritas </h1>
        <ul className='menu-items'>
            <li>
                <a href='' className='menu-list'> Productos </a>
            </li>

            <li>

                <a href=''className='menu-list'> Buscar </a>

            </li> 

            <li>

                <a href=''className='menu-list'> Ternera </a>

            </li>

            <li>

                <a href=''className='menu-list'> Cerdo </a>

            </li>

            <li>

                <a href=''className='menu-list'> Pollo </a>

            </li>

            <li>

                <a href=''className='menu-list'> Congelados </a>

            </li>
        </ul>
        <CardWidget/>
    </div>

    
  )
}

export default NavBar
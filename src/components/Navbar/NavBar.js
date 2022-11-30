import {NavLink} from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'




const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'> Carniceria y granja Las Terneritas </h1>
        <ul className='menu-items'>
            <li>
                <NavLink to = "/"> Todos los Productos</NavLink> 
            </li>

            <li>

            <NavLink to = "/category/Ternera"> Ternera </NavLink>

            </li>

            <li>

            <NavLink to = "category/Cerdo"> Cerdo </NavLink>

            </li>

            <li>

            <NavLink to = "/category/Aves"> Aves </NavLink>

            </li>

            <li>

            <NavLink to = "category/Congelados"> Congelados </NavLink>

            </li>

            <li>

            <NavLink to = "cart"> Carrito</NavLink>

            </li>
        </ul>
        <CardWidget/>

    </div>

    
  )
}

export default NavBar
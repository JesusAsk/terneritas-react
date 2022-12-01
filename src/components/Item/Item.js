import { Link } from "react-router-dom";
const Item = ({producto}) => {
    
return (
   <Link to ={`item/${producto.id}`}>
    
    <div >
        <div>
            <img src={`images/imagenes/${producto.img}`} alt={producto.nombre} />
        </div>

            <h2>{producto.nombre}</h2>
            <p > Precio: {producto.Precio}</p>
            
    </div>
    
    
    </Link>
    

)
}


 export default Item;
import { Link } from "react-router-dom";
const Item = ({producto}) => {
return (
<Link to = {` item /${producto.nombre}` }> 
    <div>

        <h2>{producto.nombre} </h2>
        
        <h2>{producto.precio} </h2>
    
    </div>
</Link>
)
}


 export default Item;
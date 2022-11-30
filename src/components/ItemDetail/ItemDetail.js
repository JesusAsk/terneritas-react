

const ItemDetail = ({Productos}) => {
  return (
    <div>
        <h2>{Productos.nombre}</h2>
        <h2>{Productos.precio}</h2>
        <h2>{Productos.categoy}</h2>

        
    </div>
  )
}

export default ItemDetail
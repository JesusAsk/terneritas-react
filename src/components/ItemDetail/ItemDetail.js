

const ItemDetail = ({productSelected}) => {
  return (
    <div>
        
        <h2>{productSelected.nombre}</h2>
        <h2>{productSelected.Precio}</h2>
        <h2>{productSelected.category}</h2>

        
    </div>
  )
}

export default ItemDetail
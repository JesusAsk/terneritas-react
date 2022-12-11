import { useState, useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {
  const [count, setCount] = useState(1);
  const { cart, addToCart } = useContext(cartContext);
  console.log(productSelected);
  return (
    <div>
        <h1>Esto es la cantidad de productos en tu carrito {cart.length}</h1>
        <h2>{productSelected.nombre}</h2>
        <h2>{productSelected.Precio}</h2>
        <h2>{productSelected.category}</h2>
        <h2>{count}</h2>
        
        <ItemCount setCount={setCount} />
      <button onClick={() => addToCart(productSelected, count)}>
        Agregar al carrito
      </button>
        
    </div>
  )
}

export default ItemDetail
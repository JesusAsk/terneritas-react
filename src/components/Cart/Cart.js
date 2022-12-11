import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../context/CartProvider';


const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const getTotalPrice = () => {
    setTotal(
      cart.reduce((acc,Productos ) => acc + Productos.Precio * Productos.quantity, 0)
    );
  
    
  };
  useEffect(() => {
    getTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
      }}
    >
      {cart.map((Productos) => (
        <div
          key={Productos.id}
          style={{
            marginTop: '20px',
            padding: '40px',
            border: '1px solid gray',
          }}
        >
          <img
            alt={Productos.nombre}
            src={`images/imagenes${Productos.imgId}`}
            width={'150px'}
          />
          <h2>{Productos.nombre}</h2>
          <h2>{Productos.Precio}</h2>
          <h2>{Productos.quantity}</h2>
        </div>
      ))}
      <div>
        <h1>Total: {total} </h1>
        <button >Crear orden</button>
        <div>
          <h2>Formulario</h2>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Telefono"
            value={formValues.phone}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
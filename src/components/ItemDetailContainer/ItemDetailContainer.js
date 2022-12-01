import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Productos } from "../Productos/Productos";
import { useEffect,useState } from "react";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState();
  const {id} = useParams();

  const getProductos = () => {
    const productFiltered = Productos.filter((Productos)=> {
      return Productos.id == id ;

    })
    console.log(productFiltered)
    setProductSelected(...productFiltered)
  };

  useEffect(() => {
    getProductos();
  },[id]);


  return (
    <div>
      {productSelected && <ItemDetail productSelected = {productSelected}/> }
    </div>
  )
}

export default ItemDetailContainer





/* import { useEffect,useState } from "react"
import { Productos } from "../Productos/Productos";

const ItemDetailContainer = () => {

  const [productos,setProductos] = useState();

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000 )
  });

  useEffect(() => {
    getProductos.then ((response) => {
        setProductos(response [0,1,2,3,4,5,6]);
    })
  }, []);
  return (
    <div>
      <h1>  {productos?.nombre} </h1>
    </div>
  )
}

export default ItemDetailContainer */
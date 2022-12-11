import { useEffect, useState } from "react";
import { Productos } from "../Productos/Productos";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {category} = useParams(); 
  

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (category){
        const filteredProductos = Productos.filter(() => {
          return Productos.category === category 
        });
        resolve (filteredProductos)
      } else {

      resolve (Productos)

      }
    }, 2000 )
  })
  
  useEffect(() => {
  getProducts.then((res) => setItems(res));
  },[category]);
  return (
    <div>
      <ItemList productList  = {items} />
    </div>
 );

}

export default ItemListContainer;
//export const ItemListContainer = () => {
//const [productList, setProductList] = useState ([]);

//const getProducts = new Promise ((resolve, reject ) => {
//    setTimeout(() => {
//      resolve (Productos);
//    }, 1000);
//});

//useEffect(() => {
//  getProducts.then((respuesta) => {
//    setProductList(respuesta);
//  },)
//  setTimeout(() => {
    
//  },2000 );
   
//}, [productList ]);

//return ( 

//  <div> 

//  <ItemList productList = {productList} />
  
//   </div>
//);
//}



//export default ItemListContainer;











//export const ItemListContainer = () => {
  
//  const [product, setProduct] = useState(); 
//const getProductos = new Promise ((resolve, reject) => {
//    setTimeout(() => {
//      resolve(Productos);
//    }, 2000 );
//  })

//  useEffect (() => {
//    getProductos.then ((response) => {
//      setProduct(response [3]);
//    })
//  }, []) ;
//  return (
//    <div>
//      <h1> {product?.nombre} </h1>
//    </div>
//  )
//}

//export default ItemListContainer; 
import Item from "../components/ItemListContainer/Item/Item";


const ItemList = ( {productList}) => { 
  return (
    <>
        {productList.map((product) => (
            <Item key={product.id} producto = {product}/> 
        ))
        }
    </>
    );
    }; 

    export default ItemList;
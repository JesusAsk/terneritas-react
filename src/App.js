import './App.css'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    
    <BrowserRouter> 
    <NavBar/> 
    
    <Routes>
   
     <Route path="/" element = {<ItemListContainer/>} />
     <Route path="/category/categoy" element = {<ItemListContainer/>} />
     <Route path="item/:id" element = {<ItemDetailContainer/>} />
     <Route path="cart" element={<Cart/>}/>

    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;

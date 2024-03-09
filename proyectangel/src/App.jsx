import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartPage from './Components/CartPage';
import Checkout from './Components/Checkout'; 
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

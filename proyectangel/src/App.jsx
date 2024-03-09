import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartPage from './Components/CartPage';
import { CartProvider } from './Components/CartContext';

function App() {
  // Recuperar los datos del carrito del almacenamiento local al cargar la página
  const storedCartItems = localStorage.getItem("cartItems");
  const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

  return (
    <CartProvider initialCartItems={initialCartItems}> {/* Pasar los datos iniciales del carrito al proveedor de contexto */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

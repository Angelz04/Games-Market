import { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import './CarWidget.css';
import { CartContext } from '../CartContext'; // Importar el contexto del carrito

const CarWidget = () => {
  const { cartItems } = useContext(CartContext); // Obtener el estado del carrito del contexto

  return (
    <div className="cart-container">
      <button>
        <BsCart className="custom-cart" />
        <span className="cart-item-count">{cartItems.length}</span> {/* Mostrar la longitud del carrito */}
      </button>
    </div>
  );
};

export default CarWidget;

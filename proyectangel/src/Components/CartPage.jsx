import { useContext } from "react";
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import { Link } from 'react-router-dom'

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Calcular el precio total de todos los productos en el carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main>
      <h2 className="text-center text-white pt-5">Carrito</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {cartItems.map((producto) => (
          <Card key={producto.id} className="m-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.image} className="card-img" />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <p className="item-p">Descripción: {producto.description}</p>
              <p className="item-p">Cantidad seleccionada: {producto.quantity}</p>
              <p className="item-p">Precio total: ${producto.price * producto.quantity}</p>
              <Button variant="danger" onClick={() => handleRemoveFromCart(producto.id)}>Eliminar producto</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="p-3 text-center ">
        <p className="fs-5 text-white">Total de la compra: ${totalPrice}</p>
        {cartItems.length > 0 ? ( // Verifica si hay productos en el carrito
          <Link to="/checkout"> {/* Utiliza Link para redireccionar a la vista de checkout */}
            <Button variant="success" className="mt-3 mb-5">Checkout</Button>
          </Link>
        ) : (
          <p className="text-white">No hay productos en el carrito</p>
        )}
      </div>
    </main>
  );
}

export default CartPage;

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productosJson from '../productos.json';
import { Card,  Spinner } from 'react-bootstrap';
import { CartContext } from './CartContext'; 

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

  useEffect(() => {
    const timer = setTimeout(() => { 
      const productoEncontrado = productosJson.find((item) => item.id === parseInt(itemId));
      setProducto(productoEncontrado);
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [itemId]);

  const { addToCart } = useContext(CartContext); 

  const handleAgregarAlCarrito = () => {
    addToCart({ ...producto, quantity }); // Incluir la cantidad seleccionada al agregar al carrito
    console.log(`Agregado al carrito: ${quantity} unidades de ${producto.name}`);
  };

  if (loading) {
    return ( 
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!producto) return null;

  return (
    <main className="item-detail">
      <div className="mx-auto" style={{ maxWidth: '400px' }}>
        <Card className="m-5">
          <Card.Img variant="top" src={producto.image} />
          <Card.Body>
            <Card.Title className="item-title" style={{ textTransform: "capitalize" }}>{producto.name}</Card.Title>
            <section style={{ display: "flex", alignItems: "center" }}>
              <section className="product-info">
                <p className="item-p">Description: {producto.description}</p>
                <p className="item-p">Stock: {producto.stock}</p>
                <p className="item-p">Price: {producto.price}</p>
                <div className="quantity-section">
                  <button className="quantity-button" onClick={() => setQuantity(quantity - 1)}>-</button>
                  <span className="quantity">{quantity}</span>
                  <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="add-to-cart-button" onClick={handleAgregarAlCarrito}>Add to Cart</button>
              </section>
            </section>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}

export default ItemDetailContainer;

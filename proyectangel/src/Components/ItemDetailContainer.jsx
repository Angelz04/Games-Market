import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productosJson from '../productos.json';
import {Card, Spinner} from 'react-bootstrap';


export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState();
  const [cantidad, setCantidad] = useState(1); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => { 
      const productoEncontrado = productosJson.find((item) => item.id === parseInt(itemId));
      setProducto(productoEncontrado);
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [itemId]);

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

  const handleAumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const handleReducirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${producto.name}`);
  };

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
                <p className="item-p">Category: {producto.category}</p>
                <div className="quantity-section">
                <button className="quantity-button" onClick={handleReducirCantidad}>-</button>
                <span className="quantity">{cantidad}</span>
                <button className="quantity-button" onClick={handleAumentarCantidad}>+</button>
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
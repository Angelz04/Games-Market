import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import productosJson from '../../productos.json';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    asyncMock(categoryId).then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <main>
      <h2 className="greeting-text">{greeting}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {productos.map((item) => (
          <Card key={item.id} className="m-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} className="card-img" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Button className="verDetalles" variant="primary" onClick={() => (item.id)}>
                <Link to={`/item/${item.id}`} className="link">Ver Detalles</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.any,
};

function asyncMock(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        resolve(productosJson);
      } else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.category === categoryId;
        });
        resolve(productosFiltrados);
      }
    }, 2000);
  });
}
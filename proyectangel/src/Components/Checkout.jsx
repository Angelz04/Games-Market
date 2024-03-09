import { useContext, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; 

function Checkout() {
  const { finishOrder, cartItems } = useContext(CartContext);
  const [buyerData, setBuyerData] = useState({ name: '', phone: '', email: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({ ...buyerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await finishOrder(buyerData);
    navigate('/'); 
  };

  return (
    <main>
      <h2 className="text-center text-white pt-5">Checkout</h2>
      <Card className="m-5">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" name="name" value={buyerData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese su teléfono" name="phone" value={buyerData.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" name="email" value={buyerData.email} onChange={handleChange} required />
            </Form.Group>
            <Button className='m-5' variant="primary" type="submit" disabled={cartItems.length === 0}>
              Finalizar compra
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Checkout;

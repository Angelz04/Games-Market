import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para cargar los datos del carrito desde Firestore cuando se monta el componente
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const db = getFirestore();
        const cartCollection = collection(db, 'cart');
        const cartSnapshot = await getDocs(cartCollection);
        const cartData = cartSnapshot.docs.map(doc => doc.data());
        setCartItems(cartData);
      } catch (error) {
        console.error("Error al cargar el carrito desde Firestore:", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const db = getFirestore();
      const cartCollection = collection(db, 'cart');
      const docRef = await addDoc(cartCollection, item);
      setCartItems([...cartItems, { ...item, id: docRef.id }]);
    } catch (error) {
      console.error("Error al agregar elemento al carrito en Firestore:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const db = getFirestore();
      const cartDoc = doc(db, 'cart', itemId);
      await deleteDoc(cartDoc);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error al eliminar elemento del carrito en Firestore:", error);
    }
  };

  const clearCart = async () => {
    try {
      const db = getFirestore();
      const cartCollection = collection(db, 'cart');
      const cartSnapshot = await getDocs(cartCollection);
      cartSnapshot.docs.forEach(async doc => {
        await deleteDoc(doc.ref);
      });
      setCartItems([]);
    } catch (error) {
      console.error("Error al limpiar el carrito en Firestore:", error);
    }
  };

  // Función para finalizar la compra y mostrar los datos de la orden en Firestore
  const finishOrder = async (buyerData) => {
    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      const orderDocRef = await addDoc(ordersCollection, { buyer: buyerData, items: cartItems });
      console.log('Orden creada con ID:', orderDocRef.id);

      // Obtener los datos de la orden recién creada
      const orderDoc = await getDoc(doc(db, 'orders', orderDocRef.id));
      if (orderDoc.exists()) {
        const orderData = orderDoc.data();
        console.log('Datos de la orden:', orderData);
      } else {
        console.error('No se encontraron datos para la orden recién creada.');
      }

      // Limpiar el carrito después de finalizar la compra
      clearCart();
    } catch (error) {
      console.error("Error al finalizar la compra y guardar la orden en Firestore:", error);
    }
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    finishOrder,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

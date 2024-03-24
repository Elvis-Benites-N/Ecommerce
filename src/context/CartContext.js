import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { firestore } from '../config/firebaseConfig';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const querySnapshot = await getDocs(collection(firestore, "cartItems"));
      const items = querySnapshot.docs.map(doc => ({ ...doc.data(), firestoreId: doc.id }));
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const addToCart = async (product) => {

    const existingItem = cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      const docRef = await addDoc(collection(firestore, "cartItems"), {
        ...product,
        quantity: product.quantity || 1,
      });
      setCartItems([...cartItems, { ...product, firestoreId: docRef.id }]);
    } else {
    }
  };

  const removeFromCart = async (firestoreId) => {
    try {
      await deleteDoc(doc(firestore, "cartItems", firestoreId));
      setCartItems(prevItems => prevItems.filter(item => item.firestoreId !== firestoreId));
    } catch (error) {
      console.error("Error al eliminar el ítem del carrito:", error);
    }
  };

  const finalizePurchase = async (userData, navigate) => {
    const purchaseDoc = {
      user: userData,
      items: cartItems,
      date: new Date(),
      total: cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0),
    };
    try {
      await addDoc(collection(firestore, "purchases"), purchaseDoc);
      Swal.fire("¡Compra exitosa!", "Tu compra ha sido registrada con éxito.", "success").then((result)=>{
        if (result.isConfirmed || result.isDismissed) {
            navigate('/products');
        }
      });
      setCartItems([]);
      
    } catch (error) {
      console.error("Error al finalizar la compra: ", error);
      Swal.fire("Error", "Hubo un problema al finalizar tu compra.", "error");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, finalizePurchase }}>
      {children}
    </CartContext.Provider>
  );

};

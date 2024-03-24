import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../pages/itemDetails';
import Loader from '../components/Loader/ScaleLoader';
import Layout from '../components/Layout/Layout';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(firestore, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
          setIsLoading(false);
        } else {
          console.log("No such document!");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Error: El producto no se pudo cargar</div>;
  }

  return (
    <Layout title={"Detalles del producto"}>
      <ItemDetail product={product} />;
    </Layout>
  );
};

export default ItemDetailContainer;

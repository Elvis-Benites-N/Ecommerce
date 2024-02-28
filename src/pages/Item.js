import React from 'react';

const Item = ({ nombre, descripcion, categoria, precio, stock, img }) => {
  return (
    <div>
      <h5>{nombre}</h5>
      <p>{descripcion}</p>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default Item;

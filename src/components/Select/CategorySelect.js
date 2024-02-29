import React from 'react';
import '../../styles/select/categorySelect.css'

const CategorySelect = ({ selectedCategory, onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select className="button-select" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="Todos">Todos</option>
      <option value="Remeras">Remeras</option>
      <option value="Buzos">Buzos</option>
      <option value="Zapatillas">Zapatillas</option>
      <option value="Pijamas">Pijamas</option>
    </select>
  );
};

export default CategorySelect;

import React, { useState, useEffect } from 'react';
import './styles.css'; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Ibuprofeno', price: 50 },
        { id: 2, name: 'Paracetamol', price: 30 },
        { id: 3, name: 'Vitamina C', price: 45 },
        { id: 4, name: 'Electrolit', price: 25 },
      ]);
    }, 1000);
  }, []);

  return (
    <div id="productos" className="page-content">
        <h1>Productos</h1>
        <div className="product-list">
        {products.map((product) => (
            <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button
                className="add-button"
                onClick={() => alert(`Agregado ${product.name}`)}
            >
                Agregar al carrito
            </button>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Products;

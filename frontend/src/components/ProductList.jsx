import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, loading }) {
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <p>No products available</p>
      </div>
    );
  }

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-list">
      {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="products-grid">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

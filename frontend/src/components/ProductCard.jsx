import React from 'react';
import './ProductCard.css';

function ProductCard({ product, showReasoning = false, reasoning = '', relevanceScore = null }) {
  const specifications = typeof product.specifications === 'string' 
    ? JSON.parse(product.specifications) 
    : (product.specifications || {});

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className={`product-card ${showReasoning ? 'recommended' : ''}`}>
      {relevanceScore && (
        <div className="relevance-badge">
          {Math.round(relevanceScore * 100)}% match
        </div>
      )}
      
      <div className="product-image">
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name}
          />
        ) : (
          <div className="image-placeholder">
            <span className="placeholder-text">{product.name}</span>
          </div>
        )}
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-details">
          <div className="brand-rating">
            <span className="brand">{product.brand}</span>
            <div className="rating">
              {renderRating(product.rating)}
              <span className="rating-value">({product.rating})</span>
            </div>
          </div>

          <div className="price">{formatPrice(product.price)}</div>
        </div>

        {Object.keys(specifications).length > 0 && (
          <div className="specifications">
            <h4>Specifications:</h4>
            <ul>
              {Object.entries(specifications).slice(0, 3).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, ' ')}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showReasoning && reasoning && (
          <div className="ai-reasoning">
            <h4>🤖 Why this is recommended:</h4>
            <p>{reasoning}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

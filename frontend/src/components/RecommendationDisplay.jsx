import React from 'react';
import ProductCard from './ProductCard';
import './RecommendationDisplay.css';

function RecommendationDisplay({ recommendations, searchQuery }) {
  if (!recommendations || !recommendations.recommendations) {
    return (
      <div className="no-recommendations">
        <p>No recommendations available</p>
      </div>
    );
  }

  const { recommendations: recs, summary } = recommendations;

  return (
    <div className="recommendation-display">
      <div className="recommendation-header">
        <h2>🤖 AI Recommendations</h2>
        <p className="search-query">For: "{searchQuery}"</p>
      </div>

      {summary && (
        <div className="ai-summary">
          <h3>🧠 AI Analysis:</h3>
          <p>{summary}</p>
        </div>
      )}

      {recs && recs.length > 0 ? (
        <div className="recommendations-grid">
          {recs.map((rec, index) => (
            <ProductCard
              key={rec.product.id}
              product={rec.product}
              showReasoning={true}
              reasoning={rec.reasoning}
              relevanceScore={rec.relevanceScore}
            />
          ))}
        </div>
      ) : (
        <div className="no-recommendations">
          <p>No matching products found for your query.</p>
        </div>
      )}

      <div className="recommendation-stats">
        <p>
          Found <strong>{recs.length}</strong> {recs.length === 1 ? 'recommendation' : 'recommendations'} 
          based on your search criteria
        </p>
      </div>
    </div>
  );
}

export default RecommendationDisplay;

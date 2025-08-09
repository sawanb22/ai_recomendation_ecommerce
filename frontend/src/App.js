import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchForm from './components/SearchForm';
import RecommendationDisplay from './components/RecommendationDisplay';
import { getAllProducts, getRecommendations } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      
      // Validate API response is an array
      if (!Array.isArray(data)) {
        console.error('API returned non-array:', typeof data, data);
        throw new Error(`Expected array but got ${typeof data}. Check API endpoint.`);
      }
      
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
      console.error('Error loading products:', err);
      setProducts([]); // Ensure products is always an array
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setRecommendations(null);
      setSearchQuery('');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSearchQuery(query);
      
      const data = await getRecommendations(query);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to get recommendations. Please try again.');
      console.error('Error getting recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearRecommendations = () => {
    setRecommendations(null);
    setSearchQuery('');
    setError(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛍️ AI Product Recommendation System</h1>
        <p>Find the perfect products using AI-powered recommendations</p>
      </header>

      <main className="App-main">
        <div className="search-section">
          <SearchForm 
            onSearch={handleSearch} 
            loading={loading}
            onClear={clearRecommendations}
            hasRecommendations={!!recommendations}
          />
          
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}
        </div>

        {recommendations ? (
          <div className="recommendations-section">
            <RecommendationDisplay 
              recommendations={recommendations}
              searchQuery={searchQuery}
            />
          </div>
        ) : (
          <div className="products-section">
            <h2>All Products</h2>
            <ProductList products={products} loading={loading} />
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Powered by Gemini AI | Built with React</p>
      </footer>
    </div>
  );
}

export default App;

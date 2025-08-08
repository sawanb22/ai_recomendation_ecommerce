import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Request interceptor
        this.api.interceptors.request.use(
            (config) => {
                console.log(`Making API request: ${config.method?.toUpperCase()} ${config.url}`);
                return config;
            },
            (error) => {
                console.error('API request error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.api.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.error('API response error:', error);
                if (error.code === 'ECONNREFUSED') {
                    throw new Error('Unable to connect to server. Please make sure the backend is running.');
                }
                throw error;
            }
        );
    }

    // Product methods
    async getAllProducts() {
        try {
            const response = await this.api.get('/products');
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch products: ${error.message}`);
        }
    }

    async getProductById(id) {
        try {
            const response = await this.api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch product: ${error.message}`);
        }
    }

    async getProductsByCategory(category) {
        try {
            const response = await this.api.get(`/products/category/${category}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch products by category: ${error.message}`);
        }
    }

    async getCategories() {
        try {
            const response = await this.api.get('/products/categories');
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch categories: ${error.message}`);
        }
    }

    async searchProducts(query) {
        try {
            const response = await this.api.get('/products/search', {
                params: { q: query }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to search products: ${error.message}`);
        }
    }

    // Recommendation methods
    async getRecommendations(query, category = null, priceRange = null) {
        try {
            const requestData = {
                query,
                ...(category && { category }),
                ...(priceRange && { priceRange })
            };

            const response = await this.api.post('/recommendations', requestData);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get recommendations: ${error.message}`);
        }
    }

    async getRecommendationHistory() {
        try {
            const response = await this.api.get('/recommendations/history');
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch recommendation history: ${error.message}`);
        }
    }

    // Health check
    async checkHealth() {
        try {
            const response = await this.api.get('/health');
            return response.data;
        } catch (error) {
            throw new Error(`Health check failed: ${error.message}`);
        }
    }
}

const apiService = new ApiService();

// Export individual functions for convenience
export const getAllProducts = () => apiService.getAllProducts();
export const getProductById = (id) => apiService.getProductById(id);
export const getProductsByCategory = (category) => apiService.getProductsByCategory(category);
export const getCategories = () => apiService.getCategories();
export const searchProducts = (query) => apiService.searchProducts(query);
export const getRecommendations = (query, category, priceRange) => 
    apiService.getRecommendations(query, category, priceRange);
export const getRecommendationHistory = () => apiService.getRecommendationHistory();
export const checkHealth = () => apiService.checkHealth();

export default apiService;

# 🤖 AI Product Recommendation System

An intelligent e-commerce product recommendation system powered by Google Gemini AI, built with React frontend and Node.js backend.

![AI Recommendations](https://img.shields.io/badge/AI-Powered-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-orange)

## ✨ Features

- 🤖 **AI-Powered Recommendations** - Uses Google Gemini Flash API for intelligent product matching
- � **Natural Language Search** - Search using phrases like "I want a phone under $500"
- 💰 **Smart Price Filtering** - Automatically extracts price constraints from user queries
- 🏷️ **Category Detection** - Intelligently categorizes products from search terms
- 📱 **Responsive Design** - Clean, modern UI that works on all devices
- 🎯 **Relevance Scoring** - Products ranked by AI-determined relevance
- 📊 **Fallback System** - Keyword-based matching when AI is unavailable
- 💾 **SQLite Database** - Lightweight database with sample product data

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library with hooks
- **CSS3** - Custom styling with responsive design
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **SQLite3** - Lightweight database
- **Google Gemini AI** - AI-powered recommendations
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Google Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-recommendation-ecommerce.git
cd ai-recommendation-ecommerce
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in the backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
DB_PATH=./database/products.db
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 📊 Sample Data

The system comes pre-loaded with 13 sample products including:
- **Smartphones**: iPhone 15 Pro, Samsung Galaxy S24 Ultra, moto edge, Google Pixel 7a, OnePlus Nord CE 3
- **Electronics**: MacBook Air M3, Sony WH-1000XM5 headphones
- **Fashion**: Nike Air Max 270, Levi's 501 jeans
- **Home & Garden**: KitchenAid Stand Mixer, Dyson V15 vacuum
- **Sports**: Fitbit Charge 6
- **Books**: The Lean Startup

## 🔍 Usage Examples

Try these natural language searches:
- "I want a phone under $500"
- "Show me laptops for work"
- "Need wireless headphones"
- "Looking for running shoes"
- "Kitchen appliances under $400"

## 🏗️ Project Structure

```
ai-recommendation-ecommerce/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── App.js          # Main app component
│   └── package.json
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── server.js       # Express server
│   └── package.json
├── .gitignore
└── README.md
```

## 🔧 API Endpoints

### Get Recommendations
```
POST /api/recommendations
Content-Type: application/json

{
  "query": "I want a phone under $500",
  "category": "Electronics",
  "priceRange": { "min": 0, "max": 500 }
}
```

### Get All Products
```
GET /api/products
```

### Get Product by ID
```
GET /api/products/:id
```

## 🧠 AI Features

### Natural Language Processing
- **Price Extraction**: Understands "under $500", "below $300", "budget of $200"
- **Category Detection**: Maps "phone", "smartphone", "mobile" to phone category
- **Keyword Matching**: Fallback system for reliable results

### Smart Filtering
- **Multi-criteria Filtering**: Combines category, price, and keyword filters
- **Relevance Scoring**: AI-determined product relevance scores
- **Fallback Logic**: Keyword-based recommendations when AI is unavailable

## 🛡️ Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
DB_PATH=./database/products.db
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for intelligent recommendations
- React team for the amazing frontend framework
- SQLite for the lightweight database solution

## 🔗 Links

- [Google Gemini AI](https://ai.google.dev/)
- [React Documentation](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)

---

**Built with ❤️ using AI-powered recommendations**
- 📱 Responsive design

## Quick Start

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the backend directory:
```
GEMINI_API_KEY=your_gemini_flash_api_key
PORT=3001
DB_PATH=./database/products.db
```

## Tech Stack

- **Frontend**: React, Axios, CSS3
- **Backend**: Node.js, Express, SQLite3
- **AI**: Google Gemini Flash API
- **Database**: SQLite

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `POST /api/recommendations` - Get AI recommendations
- `GET /api/categories` - Get product categories

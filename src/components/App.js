import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <h1>Online Mobile Store</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

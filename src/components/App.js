import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <h1>Online Mobile Store</h1>
        <nav>
          <a href="/">Home</a> | <a href="/admin">Admin Panel</a>
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

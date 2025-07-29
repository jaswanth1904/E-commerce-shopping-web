import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Elections() {
  return (
    <div className="category-page">
      <h2>Elections</h2>
      <p>Explore Latest Electronics Deals & items.</p>
      <Link to="/" className="back-button">Back to Shop</Link>
    </div>
  );
}

export default Elections;
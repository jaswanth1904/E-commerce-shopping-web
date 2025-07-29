import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Groceries.css';

function Groceries() {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  const groceryItems = [
    // Vegetables
    { id: 1, name: 'Organic Carrots', price: 2.99, image: 'https://i.pinimg.com/736x/5f/ae/26/5fae260a9fd3f56880a5279af570aa07.jpg', category: 'Vegetables' },
    { id: 2, name: 'Fresh Broccoli', price: 3.49, image: 'https://i.pinimg.com/736x/ee/4f/d9/ee4fd999067d35cbb26288d6440f4af6.jpg', category: 'Vegetables' },
    { id: 3, name: 'Spinach Bundle', price: 1.99, image: 'https://i.pinimg.com/736x/0a/59/82/0a598292a4ddd3b1d1390f85022bb16f.jpg', category: 'Vegetables' },
    { id: 4, name: 'Red Bell Peppers', price: 4.29, image: 'https://i.pinimg.com/736x/94/19/1f/94191fba5364222b7da57c5d50ab4585.jpg', category: 'Vegetables' },
    // Snacks
    { id: 5, name: 'Potato Chips', price: 2.49, image: 'https://i.pinimg.com/736x/78/ed/a8/78eda88e593d3e656b4e27363b30f521.jpg', category: 'Snacks' },
    { id: 6, name: 'Mixed Nuts', price: 5.99, image: 'https://i.pinimg.com/736x/1c/77/c2/1c77c2f0b12964bc542cdaac8f93b021.jpg', category: 'Snacks' },
    { id: 7, name: 'Pretzel Sticks', price: 3.29, image: 'https://i.pinimg.com/736x/80/7c/4c/807c4c80755af73e74042e47f7a9aa6e.jpg', category: 'Snacks' },
    { id: 8, name: 'Granola Bars', price: 4.49, image: 'https://i.pinimg.com/736x/e4/2c/c0/e42cc0df057903b9cb5cd982de9fc204.jpg', category: 'Snacks' },
    // Other Groceries
    { id: 9, name: 'Organic Apples', price: 4.99, image: 'https://i.pinimg.com/736x/b3/fa/eb/b3faeb903bd3e503b96a9cc08540547e.jpg', category: 'Fruits' },
    { id: 10, name: 'Whole Grain Bread', price: 3.49, image: 'https://i.pinimg.com/736x/6c/d7/8a/6cd78a7df572e91d547060df9ea2bc34.jpg', category: 'Bakery' },
    { id: 11, name: 'Almond Milk', price: 2.99, image: 'https://i.pinimg.com/736x/89/d7/9e/89d79e4166b90d7077e3d8763950e840.jpg', category: 'Dairy' },
    { id: 12, name: 'Free-Range Eggs', price: 5.99, image: 'https://i.pinimg.com/736x/6f/93/f5/6f93f5bba37f19628fd29e05b2fadfdd.jpg', category: 'Dairy' },
  ];

  const groupedItems = groceryItems.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value > 0 ? value : 1,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    console.log(`Added ${quantity} of ${item.name} to cart`);
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = currentCart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex >= 0) {
      currentCart[existingItemIndex].quantity = (currentCart[existingItemIndex].quantity || 1) + quantity;
    } else {
      currentCart.push({ ...item, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    navigate('/cart', { state: { cart: currentCart } });
  };

  return (
    <div className="category-page">
      <h2>Groceries</h2>
      <p>Daily essentials, organic vegetables, snacks, and more.</p>
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="grocery-grid">
            {groupedItems[category].map((item) => (
              <div key={item.id} className="grocery-card">
                <img src={item.image} alt={item.name} className="grocery-image" />
                <h4>{item.name}</h4>
                <p className="price">${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button
                  onClick={() => handleAddToCart(item)}
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/" className="back-button">Back to Shop</Link>
    </div>
  );
}

export default Groceries;
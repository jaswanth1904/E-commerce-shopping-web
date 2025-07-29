import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], totalPrice = 0 } = location.state || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const paymentMethods = [
    { id: 'phonepe', name: 'PhonePe', icon: '📱' },
    { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
    { id: 'upi', name: 'UPI', icon: '📲' }
  ];

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (Object.values(deliveryAddress).some((field) => !field)) {
      alert('Please fill in all address fields.');
      return;
    }
    // Simulate order placement
    alert(`Order placed successfully using ${selectedPaymentMethod}!`);
    navigate('/'); // Redirect to home page after order placement
  };

  const handleBackToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className="orders-container">
      <h1>Checkout</h1>
      <div className="orders-content">
        <div className="order-details">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="order-items">
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <img src={item.images[0]} alt={item.title} className="order-item-image" />
                  <div className="order-item-details">
                    <h3>{item.title}</h3>
                    <p><strong>Brand:</strong> {item.brand}</p>
                    <p><strong>Size:</strong> {item.selectedSize}</p>
                    <p><strong>Quantity:</strong> {item.quantity || 1}</p>
                    <p><strong>Price:</strong> ₹{(item.price * (item.quantity || 1)).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="order-total">
            <p><strong>Total:</strong> ₹{totalPrice.toLocaleString()}</p>
          </div>

          <h2>Delivery Address</h2>
          <div className="address-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={deliveryAddress.name}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={deliveryAddress.address}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={deliveryAddress.city}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={deliveryAddress.state}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={deliveryAddress.pincode}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={deliveryAddress.phone}
              onChange={handleAddressChange}
              className="address-input"
            />
          </div>
        </div>

        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`payment-option ${selectedPaymentMethod === method.id ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodChange(method.id)}
            >
              <span className="payment-icon">{method.icon}</span>
              <span>{method.name}</span>
            </div>
          ))}
          <button className="place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <button className="back-to-cart" onClick={handleBackToCart}>
            Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
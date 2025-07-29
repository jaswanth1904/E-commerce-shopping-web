import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [] } = location.state || {};
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : cart;
  });
  
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    email: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const paymentMethods = [
    { id: 'phonepe', name: 'PhonePe', icon: '📱' },
    { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
    { id: 'upi', name: 'UPI', icon: '📲' }
  ];

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (cart.length > 0) {
      setCartItems((prevItems) => {
        const newItems = [...prevItems];
        cart.forEach((newItem) => {
          const existingItemIndex = newItems.findIndex(
            (item) => item.id === newItem.id
          );
          if (existingItemIndex >= 0) {
            newItems[existingItemIndex].quantity =
              (newItems[existingItemIndex].quantity || 1) + (newItem.quantity || 1);
          } else {
            newItems.push({ ...newItem, quantity: newItem.quantity || 1 });
          }
        });
        return newItems;
      });
    }
  }, [cart]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleProceedToPayment = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to payment.');
      return;
    }
    setShowPaymentForm(true);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
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

    const orderItemsList = cartItems.map(item => 
      `Item: ${item.name || item.title}, Qty: ${item.quantity || 1}, Price: ₹${item.price.toLocaleString()}`
    ).join('\n');

    const templateParams = {
      user_name: deliveryAddress.name,
      user_phone: deliveryAddress.phone,
      user_address: `${deliveryAddress.address}, ${deliveryAddress.city}, ${deliveryAddress.state} - ${deliveryAddress.pincode}`,
      email: deliveryAddress.email,
      order_date: new Date().toLocaleString(),
      order_items: orderItemsList,
      cost_subtotal: `₹${totalPrice.toLocaleString()}`,
      cost_shipping: '₹0',
      cost_tax: '₹0',
      cost_total: `₹${totalPrice.toLocaleString()}`
    };

    emailjs
      .send(
        'service_bl2w25g',
        'template_kls1pc8',
        templateParams,
        'MjJPHnhc7Im66K4cI'
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setOrderPlaced(true);
        setTimeout(() => {
          setCartItems([]);
          localStorage.removeItem('cart');
          setDeliveryAddress({
            name: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            email: ''
          });
          setSelectedPaymentMethod('');
          setShowPaymentForm(false);
          setOrderPlaced(false);
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Order placed but failed to send confirmation email.');
      });
  };

  const handleBackToShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {orderPlaced && (
        <div className="order-confirmation">
          <div className="order-confirmation-card">
            <div className="checkmark">✔</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You'll receive a Email confirmation soon.</p>
          </div>
        </div>
      )}
      {cartItems.length === 0 && !orderPlaced ? (
        <p>
          Your cart is empty.{' '}
          <button onClick={handleBackToShopping} className="back-to-shopping">
            Continue Shopping
          </button>
        </p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name || item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name || item.title}</h3>
                  <p>{item.details || item.description}</p>
                  <p><strong>Price:</strong> ₹{item.price.toLocaleString()}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p><strong>Subtotal ({cartItems.length} items):</strong> ₹{totalPrice.toLocaleString()}</p>
            <p><strong>Shipping:</strong> Free</p>
            <p><strong>Total:</strong> ₹{totalPrice.toLocaleString()}</p>
            {!showPaymentForm && (
              <button className="proceed-to-payment" onClick={handleProceedToPayment}>
                Proceed to Payment
              </button>
            )}
            <button className="back-to-shopping" onClick={handleBackToShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
      {showPaymentForm && !orderPlaced && (
        <div className="payment-section">
          <h2>Payment Details</h2>
          <div className="address-form">
            <h3>Delivery Address</h3>
            <input type="text" name="name" placeholder="Full Name" value={deliveryAddress.name} onChange={handleAddressChange} className="address-input" />
            <input type="text" name="phone" placeholder="Phone Number" value={deliveryAddress.phone} onChange={handleAddressChange} className="address-input" />
            <input type="text" name="address" placeholder="Address" value={deliveryAddress.address} onChange={handleAddressChange} className="address-input" />
            <input type="text" name="city" placeholder="City" value={deliveryAddress.city} onChange={handleAddressChange} className="address-input" />
            <input type="text" name="state" placeholder="State" value={deliveryAddress.state} onChange={handleAddressChange} className="address-input" />
            <input type="text" name="pincode" placeholder="Pincode" value={deliveryAddress.pincode} onChange={handleAddressChange} className="address-input" />
            <input type="email" name="email" placeholder="Email" value={deliveryAddress.email} onChange={handleAddressChange} className="address-input" />
          </div>
          <div className="payment-methods">
            <h3>Select Payment Method</h3>
            {paymentMethods.map((method) => (
              <div key={method.id} className={`payment-option ${selectedPaymentMethod === method.id ? 'selected' : ''}`} onClick={() => handlePaymentMethodChange(method.id)}>
                <span className="payment-icon">{method.icon}</span>
                <span>{method.name}</span>
              </div>
            ))}
            <button className="place-order" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Electronics.css';

 const products = [
  {
    id: 1,
    name: "Television (TV)",
    image: "https://i.pinimg.com/736x/74/69/55/746955a5e5054165a52fb38cf7ab3111.jpg",
    details: "4K Ultra HD Smart LED TV with HDR support and inbuilt streaming apps.",
    deal: "Flat 35% off on MRP + Free Wall Mount Installation",
    price: 4799,
    mrp: 7999,
    discount: 40,
    rating: 4.2,
    reviews: 207,
    stock: "In stock",
    bestSeller: "#1 Best Seller in Standard Televisions",
    emi: "₹856.66/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "DAWNTECH ELECTRONICS PRIVATE LIMITED",
  },
  {
    id: 2,
    name: "Home Theater Systems",
    image: "https://i.pinimg.com/736x/61/ff/85/61ff85ecc6d0f68ecc848c460827bea6.jpg",
    details: "5.1 Dolby Digital surround system with Bluetooth and HDMI ARC.",
    deal: "Get 20% Cashback on Credit Card Purchase",
    price: 5999,
    mrp: 7999,
    discount: 25,
    rating: 4.5,
    reviews: 150,
    stock: "In stock",
    bestSeller: null,
    emi: "₹999.83/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],    seller: "AUDIOWORLD INC.",
  },
  {
    id: 3,
    name: "Audio Systems",
    image: "https://i.pinimg.com/736x/b4/ae/db/b4aedb4b89b99deead000bdb1246febd.jpg",
    details: "Portable Hi-Fi stereo system with bass boost and 12 hours playtime.",
    deal: "Buy 1 Get 1 Free on Select Accessories",
    price: 2999,
    mrp: 3999,
    discount: 25,
    rating: 4.0,
    reviews: 89,
    stock: "In stock",
    bestSeller: null,
    emi: "₹499.83/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "SOUNDTECH LTD.",
  },
  {
    id: 4,
    name: "Streaming Devices",
    image: "https://i.pinimg.com/736x/4d/35/55/4d355539726bb7d5d29f940d08453dde.jpg",
    details: "Latest 4K streaming dongle with voice remote and app support.",
    deal: "Up to 30% off + 6-month OTT subscription free",
    price: 2499,
    mrp: 3499,
    discount: 28,
    rating: 4.3,
    reviews: 120,
    stock: "In stock",
    bestSeller: null,
    emi: "₹416.50/month in 6 EMIs",
   offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "STREAMLINE CO.",
  },
  {
    id: 5,
    name: "Gaming Consoles",
    image: "https://i.pinimg.com/736x/7a/d6/ae/7ad6aee0982603d7fa9bcc1249f2db2f.jpg",
    details: "Next-gen gaming console with 1TB storage and wireless controller.",
    deal: "Exchange Offer Available + Free Game Bundle",
    price: 34999,
    mrp: 39999,
    discount: 12,
    rating: 4.8,
    reviews: 300,
    stock: "In stock",
    bestSeller: "#2 Best Seller in Gaming Consoles",
    emi: "₹5833.17/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "GAMETECH INC.",
  },
  {
    id: 6,
    name: "Smart Speakers",
    image: "https://i.pinimg.com/736x/7c/bc/fa/7cbcfa9c4131300069e502776b3827a6.jpg",
    details: "Voice assistant-enabled smart speaker with premium audio.",
    deal: "Get Flat ₹500 Off + Free Smart Bulb",
    price: 3999,
    mrp: 4999,
    discount: 20,
    rating: 4.1,
    reviews: 95,
    stock: "In stock",
    bestSeller: null,
    emi: "₹666.50/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "SMARTAUDIO LTD.",
  },
  {
    id: 7,
    name: "Smartphones",
    image: "https://i.pinimg.com/736x/44/db/f3/44dbf3252affe1b050eef4b7ea01c988.jpg",
    details: "Latest Android smartphone with 108MP camera and AMOLED display.",
    deal: "Up to ₹7000 Exchange Bonus + No Cost EMI",
    price: 24999,
    mrp: 29999,
    discount: 17,
    rating: 4.4,
    reviews: 250,
    stock: "In stock",
    bestSeller: "#3 Best Seller in Smartphones",
    emi: "₹4166.50/month in 6 EMIs",
   offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "MOBILETECH PVT. LTD.",
  },
  {
    id: 8,
    name: "Tablets",
    image: "https://i.pinimg.com/736x/47/3e/09/473e092cfa5ab1a8b6e9ac290e1a7e9f.jpg",
    details: "10.5-inch tablet with S Pen support and 128GB storage.",
    deal: "Free Case and Screen Guard + ₹2000 Cashback",
    price: 19999,
    mrp: 24999,
    discount: 20,
    rating: 4.2,
    reviews: 180,
    stock: "In stock",
    bestSeller: null,
    emi: "₹3333.17/month in 6 EMIs",
    offers: [
      { title: "Cashback", description: "Upto ₹143.00 cashback as Amazon Pay when..." },
      { title: "No Cost EMI", description: "Upto ₹216.11 EMI interest savings on ICICI..." },
      { title: "Bank Offer", description: "Upto ₹2000.00 discount on select Credit Cards" },
      { title: "Partner Offer", description: "Get GST save upto 28% for businesses" },
    ],
    seller: "TABLETSTORE INC.",
  },
  {
    "id": 9,
    "name": "Galaxy Z Fold 7",
    "image": "https://i.pinimg.com/736x/22/d4/f3/22d4f39cbc4e9154dc3d76186da5ea0a.jpg",
    "details": "Foldable 7.6-inch AMOLED display with 120Hz refresh rate and Snapdragon 8 Gen 4.",
    "deal": "₹10000 Exchange Bonus + Free Galaxy Buds",
    "price": 149999,
    "mrp": 169999,
    "discount": 12,
    "rating": 4.7,
    "reviews": 320,
    "stock": "In stock",
    "bestSeller": "#1 Best Seller in Foldable Smartphones",
    "emi": "₹24999.83/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹5000 cashback on select bank cards" },
      { "title": "No Cost EMI", "description": "Up to ₹432.10 EMI interest savings on HDFC Bank" },
      { "title": "Bank Offer", "description": "₹3000 discount on SBI Credit Cards" },
      { "title": "Partner Offer", "description": "Free 1-year extended warranty for businesses" }
    ],
    "seller": "SAMSUNG OFFICIAL"
  },
  {
    "id": 10,
    "name": "iPhone 16 Pro",
    "image": "https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg",
    "details": "6.3-inch Super Retina XDR display with A18 Pro chip and 48MP fusion camera.",
    "deal": "₹8000 Cashback + Free AppleCare+ for 6 months",
    "price": 119999,
    "mrp": 139999,
    "discount": 14,
    "rating": 4.8,
    "reviews": 450,
    "stock": "In stock",
    "bestSeller": "#2 Best Seller in Smartphones",
    "emi": "₹19999.83/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹4000 cashback via Apple Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹345.67 EMI interest savings on ICICI Bank" },
      { "title": "Bank Offer", "description": "₹5000 discount on select Credit Cards" },
      { "title": "Partner Offer", "description": "GST invoice for up to 18% savings" }
    ],
    "seller": "APPLE INDIA PVT. LTD."
  },
  {
    "id": 11,
    "name": "Pixel 9a",
    "image": "https://i.pinimg.com/736x/e1/69/3b/e1693bf36e134a2561868236240a9b79.jpg",
    "details": "6.1-inch OLED display with Tensor G4 chip and 50MP dual camera.",
    "deal": "₹3000 Exchange Bonus + Free Google One 3-month subscription",
    "price": 39999,
    "mrp": 45999,
    "discount": 13,
    "rating": 4.5,
    "reviews": 200,
    "stock": "In stock",
    "bestSeller": "#5 Best Seller in Budget Smartphones",
    "emi": "₹6666.50/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹1500 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹198.45 EMI interest savings on Axis Bank" },
      { "title": "Bank Offer", "description": "₹2000 discount on HDFC Credit Cards" },
      { "title": "Partner Offer", "description": "Free screen protector with purchase" }
    ],
    "seller": "GOOGLE AUTHORIZED STORE"
  },
  {
    "id": 12,
    "name": "OnePlus 13",
    "image": "https://i.pinimg.com/736x/77/e5/91/77e591213d8e125f4d1c22f9eb7a83d4.jpg",
    "details": "6.8-inch AMOLED with 120Hz, Snapdragon 8 Gen 4, and 50MP triple camera.",
    "deal": "₹5000 Instant Discount + Free Wireless Charger",
    "price": 64999,
    "mrp": 74999,
    "discount": 13,
    "rating": 4.6,
    "reviews": 280,
    "stock": "In stock",
    "bestSeller": null,
    "emi": "₹10833.17/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹3000 cashback on select bank cards" },
      { "title": "No Cost EMI", "description": "Up to ₹287.65 EMI interest savings on SBI Bank" },
      { "title": "Bank Offer", "description": "₹2500 discount on ICICI Credit Cards" },
      { "title": "Partner Offer", "description": "Free 6-month Spotify Premium subscription" }
    ],
    "seller": "ONEPLUS OFFICIAL"
  },
  {
    "id": 13,
    "name": "Samsung Galaxy Tab S10",
    "image": "https://i.pinimg.com/736x/94/5e/1b/945e1bb7e0f95f1eec75d6750ea14c52.jpg",
    "details": "11-inch Dynamic AMOLED 2X display with 256GB storage and S Pen included.",
    "deal": "Free Keyboard Cover + ₹3000 Cashback",
    "price": 69999,
    "mrp": 84999,
    "discount": 18,
    "rating": 4.7,
    "reviews": 150,
    "stock": "In stock",
    "bestSeller": "#1 Best Seller in Tablets",
    "emi": "₹11666.50/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹2000 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹321.45 EMI interest savings on HDFC Bank" },
      { "title": "Bank Offer", "description": "₹3000 discount on select Credit Cards" },
      { "title": "Partner Offer", "description": "GST invoice for up to 28% savings" }
    ],
    "seller": "SAMSUNG OFFICIAL"
  },
  {
    "id": 14,
    "name": "iPad Air 6",
    "image": "https://i.pinimg.com/736x/0a/4e/5f/0a4e5fa38f8a045965048438eee3d623.jpg",
    "details": "10.9-inch Liquid Retina display with M2 chip and Apple Pencil Pro support.",
    "deal": "₹6000 Cashback + Free AirPods with purchase",
    "price": 59999,
    "mrp": 69999,
    "discount": 14,
    "rating": 4.8,
    "reviews": 300,
    "stock": "In stock",
    "bestSeller": "#2 Best Seller in Tablets",
    "emi": "₹9999.83/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹3000 cashback via Apple Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹276.54 EMI interest savings on ICICI Bank" },
      { "title": "Bank Offer", "description": "₹4000 discount on select Credit Cards" },
      { "title": "Partner Offer", "description": "Free 3-month Apple Music subscription" }
    ],
    "seller": "APPLE INDIA PVT. LTD."
  },
  {
    "id": 15,
    "name": "Redmi Note 14 5G",
    "image": "https://i.pinimg.com/736x/be/50/fa/be50fa331fd1b2eae006ea106dbc46ce.jpg",
    "details": "6.7-inch AMOLED with 120Hz, Dimensity 7025 Ultra, and 50MP Sony camera.",
    "deal": "₹2000 Instant Discount + Free Earbuds",
    "price": 18999,
    "mrp": 22999,
    "discount": 17,
    "rating": 4.3,
    "reviews": 220,
    "stock": "In stock",
    "bestSeller": null,
    "emi": "₹3166.50/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹1000 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹165.43 EMI interest savings on Axis Bank" },
      { "title": "Bank Offer", "description": "₹1500 discount on SBI Credit Cards" },
      { "title": "Partner Offer", "description": "Free screen guard with purchase" }
    ],
    "seller": "XIAOMI OFFICIAL"
  },
  {
    "id": 16,
    "name": "OPPO Reno 10 Pro",
    "image": "https://i.pinimg.com/736x/a9/3b/ff/a93bff2366b75e781dde8c2a7e562392.jpg",
    "details": "6.7-inch AMOLED with 120Hz, Snapdragon 7s Gen 3, and 50MP triple camera.",
    "deal": "₹4000 Exchange Bonus + Free Wireless Earphones",
    "price": 34999,
    "mrp": 41999,
    "discount": 17,
    "rating": 4.4,
    "reviews": 260,
    "stock": "In stock",
    "bestSeller": null,
    "emi": "₹5833.17/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹2000 cashback on select bank cards" },
      { "title": "No Cost EMI", "description": "Up to ₹198.76 EMI interest savings on HDFC Bank" },
      { "title": "Bank Offer", "description": "₹2000 discount on ICICI Credit Cards" },
      { "title": "Partner Offer", "description": "GST invoice for up to 18% savings" }
    ],
    "seller": "OPPO OFFICIAL"
  },
  {
    "id": 17,
    "name": "Vivo T4 5G",
    "image": "https://i.pinimg.com/736x/88/8d/6c/888d6c7f8f18952ac66daf48a2fdddd6.jpg",
    "details": "6.6-inch AMOLED with 7300mAh battery and 50MP AI triple camera.",
    "deal": "₹3000 Cashback + Free Charger",
    "price": 25999,
    "mrp": 30999,
    "discount": 16,
    "rating": 4.5,
    "reviews": 190,
    "stock": "In stock",
    "bestSeller": "#4 Best Seller in Smartphones",
    "emi": "₹4333.17/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹1500 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹187.65 EMI interest savings on SBI Bank" },
      { "title": "Bank Offer", "description": "₹2000 discount on select Credit Cards" },
      { "title": "Partner Offer", "description": "Free 6-month YouTube Premium subscription" }
    ],
    "seller": "VIVO OFFICIAL"
  },
  {
    "id": 18,
    "name": "Nothing Phone 3a Pro",
    "image": "https://i.pinimg.com/736x/29/d9/cf/29d9cf93f1b55d16d269bb4bb2697975.jpg",
    "details": "6.5-inch OLED with 120Hz, Dimensity 7300, and 48MP dual camera.",
    "deal": "₹2500 Instant Discount + Free Transparent Case",
    "price": 29999,
    "mrp": 34999,
    "discount": 14,
    "rating": 4.4,
    "reviews": 210,
    "stock": "In stock",
    "bestSeller": null,
    "emi": "₹4999.83/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹1500 cashback on select bank cards" },
      { "title": "No Cost EMI", "description": "Up to ₹176.54 EMI interest savings on Axis Bank" },
      { "title": "Bank Offer", "description": "₹2000 discount on HDFC Credit Cards" },
      { "title": "Partner Offer", "description": "Free 3-month cloud storage subscription" }
    ],
    "seller": "NOTHING TECH"
  },
  {
    "id": 19,
    "name": "iQOO Neo 10",
    "image": "https://i.pinimg.com/736x/64/7b/ab/647bab4d33c6197a2bbc68c05da1dfc3.jpg",
    "details": "6.7-inch AMOLED with 144Hz, Snapdragon 8s Gen 4, and 7000mAh battery.",
    "deal": "₹4000 Exchange Bonus + Free Gaming Controller",
    "price": 27999,
    "mrp": 33999,
    "discount": 18,
    "rating": 4.6,
    "reviews": 240,
    "stock": "In stock",
    "bestSeller": "#3 Best Seller in Gaming Smartphones",
    "emi": "₹4666.50/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹2000 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹198.76 EMI interest savings on ICICI Bank" },
      { "title": "Bank Offer", "description": "₹2500 discount on select Credit Cards" },
      { "title": "Partner Offer", "description": "Free 6-month Game Pass subscription" }
    ],
    "seller": "IQOO OFFICIAL"
  },
  {
    "id": 20,
    "name": "Realme Narzo 80 Pro",
    "image": "https://i.pinimg.com/736x/76/0b/be/760bbe3a3a041a93909c86453e9177d6.jpg",
    "details": "6.6-inch AMOLED with 120Hz, Dimensity 7200, and 50MP OIS camera.",
    "deal": "₹2000 Cashback + Free Earbuds",
    "price": 22999,
    "mrp": 26999,
    "discount": 15,
    "rating": 4.3,
    "reviews": 170,
    "stock": "In stock",
    "bestSeller": null,
    "emi": "₹3833.17/month in 6 EMIs",
    "offers": [
      { "title": "Cashback", "description": "Up to ₹1000 cashback on Amazon Pay" },
      { "title": "No Cost EMI", "description": "Up to ₹154.32 EMI interest savings on HDFC Bank" },
      { "title": "Bank Offer", "description": "₹1500 discount on SBI Credit Cards" },
      { "title": "Partner Offer", "description": "Free screen protector with purchase" }
    ],
    "seller": "REALME OFFICIAL"
  },
];


const Electronics = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false); // New state to track if item is added
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when viewing a new product
    setItemAdded(false); // Reset itemAdded state when viewing a new product
  };

  const handleBackToGrid = () => {
    setSelectedProduct(null);
    setItemAdded(false); // Reset itemAdded when going back to grid
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      // Get existing cart from localStorage
      const existingCart = localStorage.getItem('cart');
      let cart = existingCart ? JSON.parse(existingCart) : [];

      // Check if the product already exists in the cart
      const existingItemIndex = cart.findIndex(item => item.id === selectedProduct.id);
      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        cart[existingItemIndex].quantity += quantity;
      } else {
        // Otherwise, add new item to cart
        const cartItem = { ...selectedProduct, quantity };
        cart.push(cartItem);
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Set itemAdded to true to show "Go to Cart" button
      setItemAdded(true);
    }
  };

  const handleGoToCart = () => {
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="electronics-wrapper">
      {selectedProduct ? (
        <div className="product-details-container">
          <button className="back-button" onClick={handleBackToGrid}>
            Back to Products
          </button>
          <div className="product-details-content">
            <div className="product-image-section">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
            </div>
            <div className="product-info-section">
              <h1>{selectedProduct.name}</h1>
              <div className="product-rating">
                <span className="rating-stars">{selectedProduct.rating} ★</span>
                <span className="rating-count">({selectedProduct.reviews})</span>
                <a href="#ratings" className="see-ratings">See the page</a>
              </div>
              {selectedProduct.bestSeller && (
                <p className="best-seller">{selectedProduct.bestSeller}</p>
              )}
              <hr />
              <div className="product-pricing">
                <p className="discount">-{selectedProduct.discount}% <span className="current-price">₹{selectedProduct.price.toLocaleString()}</span></p>
                <p className="mrp">M.R.P.: ₹{selectedProduct.mrp.toLocaleString()}</p>
                <p className="taxes">Inclusive of all taxes</p>
              </div>
              <p className="emi">{selectedProduct.emi}. No Cost EMI available. <a href="#emi">EMI options</a></p>
              <div className="offers-section">
                {selectedProduct.offers && selectedProduct.offers.length > 0 && (
                  <>
                    <h3>Offers</h3>
                    <div className="offers">
                      {selectedProduct.offers.map((offer, index) => (
                        <div key={index} className="offer-card">
                          <p className="offer-title">{offer.title}</p>
                          <p className="offer-description">{offer.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="product-action-section">
              <p className="price">₹{selectedProduct.price.toLocaleString()}</p>
              <p className="delivery">FREE scheduled delivery as soon as Sunday, 1 June, 8 am - 5 pm to 523230</p>
              <p className="stock">{selectedProduct.stock}</p>
              <p className="sold-by">Sold by <a href="#seller">{selectedProduct.seller}</a></p>
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              {itemAdded && (
                <button className="go-to-cart" onClick={handleGoToCart}>
                  Go to Cart
                </button>
              )}
              <div className="protection-plan">
                <h3>Add a Protection Plan:</h3>
                <div className="plan-option">
                  <input type="checkbox" id="warranty" />
                  <label htmlFor="warranty">Extended Warranty for 1 Year for ₹999.00</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="electronics-container">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.details}</p>
              <span className="deal">{product.deal}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Electronics;
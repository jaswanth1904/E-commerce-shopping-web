// Fashion.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fashion.css';

const Fashion = () => {
  const navigate = useNavigate();
  // Initialize cart state by trying to load from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Product Data (remains the same)
  const products = [
    {
      id: 1,
      images: ['https://i.pinimg.com/736x/a1/8e/7e/a18e7e47fe28fa03edb3fa8e9baaf70f.jpg'],
      brand: 'GRECIILOOKS',
      title: "Men's Loose Mid Rise Track Pant",
      rating: 4.0,
      reviews: 547,
      bought: '500+ bought in past month',
      price: 499,
      originalPrice: 1999,
      discount: 75,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Comfortable and stylish track pants for casual wear.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Loose',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 2,
      images: ['https://i.pinimg.com/736x/4e/53/1d/4e531da470255c064ac29cafc19a4813.jpg'],
      brand: 'GRECIILOOKS',
      title: "Men's Loose Low Rise Track Pant",
      rating: 3.8,
      reviews: 209,
      bought: '',
      price: 499,
      originalPrice: 1999,
      discount: 75,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Versatile track pants with a relaxed fit.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Loose',
        waist: 'Low Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 3,
      images: ['https://i.pinimg.com/736x/d3/2a/f8/d32af82042b24fc99ca5028e22fb587e.jpg'],
      brand: 'NOBERO',
      title: "Men's Loose Mid Rise Cargo Pant",
      rating: 3.7,
      reviews: 604,
      bought: '',
      price: 864,
      originalPrice: 1699,
      discount: 49,
      availability: '',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Durable cargo pants with multiple pockets.',
      specifications: {
        material: 'Cotton',
        fit: 'Loose',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 4,
      images: ['https://i.pinimg.com/736x/de/ac/ac/deacacdb1cc09f907539a83dd0ece239.jpg'],
      brand: 'GRECIILOOKS',
      title: "Men's Loose Mid Rise Track Pant",
      rating: 4.0,
      reviews: 244,
      bought: '50+ bought in past month',
      price: 499,
      originalPrice: 1999,
      discount: 75,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Stylish track pants for everyday comfort.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Loose',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 5,
      images: ['https://i.pinimg.com/736x/da/32/01/da32014b3c3c7a198ec9033913ab0cc4.jpg'],
      brand: 'Lymio',
      title: "Men's Regular Fit Track Pant",
      rating: 4.2,
      reviews: 320,
      bought: '200+ bought in past month',
      price: 599,
      originalPrice: 2499,
      discount: 76,
      availability: 'In stock',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Comfortable track pants for active lifestyles.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Regular',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 6,
      images: ['https://i.pinimg.com/736x/b2/42/7a/b2427acdf590de15c8d82d682cfeb784.jpg'],
      brand: 'U.S. POLO ASSN.',
      title: "Men's Slim Fit Track Pant",
      rating: 4.5,
      reviews: 780,
      bought: '300+ bought in past month',
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Premium track pants with a sleek fit.',
      specifications: {
        material: 'Cotton',
        fit: 'Slim',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 7,
      images: ['https://i.pinimg.com/736x/7b/bf/8a/7bbf8ad5c9982ed5316a10a2ad9ee470.jpg'],
      brand: 'Jockey',
      title: "Men's Athletic Track Pant",
      rating: 4.1,
      reviews: 450,
      bought: '',
      price: 999,
      originalPrice: 1999,
      discount: 50,
      availability: 'In stock',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Athletic track pants designed for comfort.',
      specifications: {
        material: 'Polyester Blend',
        fit: 'Regular',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 8,
      images: ['https://i.pinimg.com/736x/6b/1e/0e/6b1e0e7d874c1092f20fa250d1733604.jpg'],
      brand: 'Van Heusen',
      title: "Men's Casual Track Pant",
      rating: 4.3,
      reviews: 620,
      bought: '100+ bought in past month',
      price: 1499,
      originalPrice: 3499,
      discount: 57,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Casual track pants with a modern design.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Regular',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 9,
      images: ['https://i.pinimg.com/736x/68/aa/b6/68aab62d39e71b5213585d6dc50b0214.jpg'],
      brand: 'Alan Jones Clothing',
      title: "Men's Loose Fit Cargo Pant",
      rating: 3.9,
      reviews: 380,
      bought: '',
      price: 799,
      originalPrice: 1999,
      discount: 60,
      availability: 'In stock',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Functional cargo pants with a loose fit.',
      specifications: {
        material: 'Cotton',
        fit: 'Loose',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 10,
      images: ['https://i.pinimg.com/736x/86/99/4b/86994befb67d50b12608ab8687a792b0.jpg'],
      brand: 'Mehrang',
      title: "Men's Jogger Track Pant",
      rating: 4.0,
      reviews: 290,
      bought: '50+ bought in past month',
      price: 699,
      originalPrice: 1799,
      discount: 61,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Stylish jogger pants for casual outings.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Jogger',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 11,
      images: ['https://i.pinimg.com/73x/19/22/bb/1922bb795168a01ce0b22ba6352df533.jpg'],
      brand: 'GRECIILOOKS',
      title: "Men's Slim Fit Track Pant",
      rating: 4.2,
      reviews: 510,
      bought: '200+ bought in past month',
      price: 549,
      originalPrice: 2199,
      discount: 75,
      availability: 'In stock',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Slim fit track pants for a modern look.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Slim',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 12,
      images: ['https://m.media-amazon.com/images/I/61qX-fX46GL._AC_UL480_FMwebp_QL65_.jpg'],
      brand: 'Lymio',
      title: "Men's Regular Fit Track Pant",
      rating: 4.0,
      reviews: 430,
      bought: '',
      price: 649,
      originalPrice: 2299,
      discount: 72,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Comfortable track pants for daily wear.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Regular',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 13,
      images: ['https://m.media-amazon.com/images/I/61Y+F5o0+PL._AC_UL480_FMwebp_QL65_.jpg'],
      brand: 'U.S. POLO ASSN.',
      title: "Men's Athletic Track Pant",
      rating: 4.4,
      reviews: 670,
      bought: '300+ bought in past month',
      price: 1399,
      originalPrice: 3199,
      discount: 56,
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Athletic track pants with a premium feel.',
      specifications: {
        material: 'Polyester Blend',
        fit: 'Regular',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    },
    {
      id: 14,
      images: ['https://m.media-amazon.com/images/I/71kAuvBaeXL._AC_UL480_FMwebp_QL65_.jpg'],
      brand: 'Jockey',
      title: "Men's Jogger Track Pant",
      rating: 4.3,
      reviews: 560,
      bought: '100+ bought in past month',
      price: 1099,
      originalPrice: 2499,
      discount: 56,
      availability: 'Limited time deal',
      delivery: 'FREE delivery Thu, 29 May',
      description: 'Jogger track pants for a sporty look.',
      specifications: {
        material: 'Cotton Blend',
        fit: 'Jogger',
        waist: 'Mid Rise',
        care: 'Machine Wash'
      }
    }
  ];

  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSizeForProduct, setSelectedSizeForProduct] = useState('');
  const productsPerPage = 8;

  // Add an effect to save cart to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handlers
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.images[0]);
    setSelectedSizeForProduct('');
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
    setSelectedImage('');
  };

  const handleAddToCart = (product) => {
    // Check if the product already exists in the cart
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        // If it exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1 // Increment quantity
        };
        return updatedCart;
      } else {
        // If it doesn't exist, add it as a new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    alert(`${product.title} added to cart!`); // Optional: for user feedback
  };

  const handleMiniImageHover = (image) => {
    setSelectedImage(image);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.price - b.price;
    if (sortOption === 'price-high-low') return b.price - a.price;
    if (sortOption === 'best-sellers') return b.reviews - a.reviews;
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {selectedProduct ? (
          <div className="product-details">
            <button onClick={handleBackClick} className="back-btn">Back to Products</button>
            <div className="details-container">
              <div className="details-image">
                <img
                  src={selectedImage || selectedProduct.images[0]}
                  alt={selectedProduct.title}
                  className="detail-image"
                />
                <div className="mini-images">
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProduct.title} view ${index + 1}`}
                      className={`mini-image ${selectedImage === image ? 'active' : ''}`}
                      onMouseEnter={() => handleMiniImageHover(image)}
                    />
                  ))}
                </div>
              </div>
              <div className="details-info">
                <h1>{selectedProduct.title}</h1>
                <p><strong>Brand:</strong> {selectedProduct.brand}</p>
                <div className="rating">
                  <span className="stars">
                    {'★'.repeat(Math.floor(selectedProduct.rating))}
                    {selectedProduct.rating % 1 !== 0 && '☆'}
                  </span>
                  <span className="rating-value">{selectedProduct.rating}</span>
                  <span className="reviews">({selectedProduct.reviews.toLocaleString()} reviews)</span>
                </div>
                {selectedProduct.bought && <p><strong>Purchases:</strong> {selectedProduct.bought}</p>}
                <div className="price">
                  <span className="current-price">₹{selectedProduct.price.toLocaleString()}</span>
                  <span className="original-price">M.R.P: ₹{selectedProduct.originalPrice.toLocaleString()}</span>
                  <span className="discount">({selectedProduct.discount}% off)</span>
                </div>
                <p><strong>Availability:</strong> {selectedProduct.availability}</p>
                <p><strong>Delivery:</strong> {selectedProduct.delivery}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
                <div className="description">
                  <h3>Product Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="specifications">
                  <h3>Specifications</h3>
                  <ul>
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
                    ))}
                  </ul>
                </div>
                <div className="reviews">
                  <h3>Customer Reviews</h3>
                  <p><strong>John D.</strong> ★★★★☆: Great fit and quality, highly recommend!</p>
                  <p><strong>Anita S.</strong> ★★★☆☆: Nice design but sizing runs small.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="sorting">
              <label>Sort by: </label>
              <select value={sortOption} onChange={handleSortChange} className="sort-select">
                <option value="default">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="best-sellers">Best Sellers</option>
              </select>
            </div>

            <div className="product-grid">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="image-container">
                    <img src={product.images[0]} alt={product.title} className="product-image" />
                  </div>
                  <div className="product-info">
                    <div className="brand">{product.brand}</div>
                    <div className="title">{product.title}</div>
                    <div className="rating">
                      <span className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {product.rating % 1 !== 0 && '☆'}
                      </span>
                      <span className="rating-value">{product.rating}</span>
                      <span className="reviews">({product.reviews.toLocaleString()})</span>
                    </div>
                    {product.bought && <div className="bought">{product.bought}</div>}
                    <div className="price">
                      <span className="current-price">₹{product.price.toLocaleString()}</span>
                      <span className="original-price">M.R.P: ₹{product.originalPrice.toLocaleString()}</span>
                      <span className="discount">({product.discount}% off)</span>
                    </div>
                    <div className="availability">{product.availability}</div>
                    <div className="delivery">{product.delivery}</div>
                    <button
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Fashion;
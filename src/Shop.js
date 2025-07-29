import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const categories = [
  {
    title: 'Electronics',
    description: 'Explore top gadgets, TVs, and more.',
    image: 'https://i.pinimg.com/736x/bb/12/2f/bb122fec2ec728718b5a3e442ae5742a.jpg',
    path: 'electronics',
  },
  {
    title: 'Fashion',
    description: 'Trendy wearables and accessories.',
    image: 'https://i.pinimg.com/736x/bb/fa/ea/bbfaeab9a555a52cc6cf64c3c32b60a2.jpg',
    path: 'fashion',
  },
  {
    title: 'Groceries',
    description: 'Daily essentials and organic items.',
    image: 'https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg',
    path: 'groceries',
  },
  
];

const blogs = [
  {
    title: 'Sustainable Shopping Tips',
    description: 'Learn how to shop sustainably with EcoCart and reduce your carbon footprint.',
    path: '/blog/sustainable-shopping-tips',
    image: 'https://i.pinimg.com/736x/53/0f/0f/530f0f3dd202c67cc866513e91058475.jpg',
  },
  {
    title: 'Top 5 Eco-Friendly Gadgets',
    description: 'Discover the best eco-friendly gadgets to add to your collection.',
    path: '/blog/eco-friendly-gadgets',
    image: 'https://i.pinimg.com/736x/3b/48/18/3b4818d98cfb0796473f048ecaa0e7e6.jpg',
  },
  {
    title: 'Fashion Trends for 2025',
    description: 'Stay ahead with the latest sustainable fashion trends for the upcoming year.',
    path: '/blog/fashion-trends-2025',
    image: 'https://i.pinimg.com/736x/8e/c2/96/8ec296cdcfc8cfdc1843299ace2f81d4.jpg',
  },
  {
    title: 'EcoCart’s Guide to Zero Waste',
    description: 'Tips and tricks for a zero-waste lifestyle with EcoCart.',
    path: '/blog/zero-waste-guide',
    image: 'https://i.pinimg.com/736x/05/19/00/051900714e609483b633ffdbfd258917.jpg',
  },
  {
    title: 'Best Organic Products of 2025',
    description: 'A roundup of the best organic products to shop this year.',
    path: '/blog/best-organic-products',
    image: 'https://i.pinimg.com/736x/77/9f/ec/779fec944e6c0fde2d2ff3cb07fe8aad.jpg',
  },
  {
    title: 'Sustainable Fashion on a Budget',
    description: 'How to build a sustainable wardrobe without breaking the bank.',
    path: '/blog/sustainable-fashion-budget',
    image: 'https://i.pinimg.com/736x/c7/00/02/c700021ab6957a3f551db902e45a03b0.jpg',
  },
];

const comingSoonFeatures = [
  {
    title: 'Account Switching',
    description: 'Log in to multiple accounts in EcoCart and quickly switch between them. Easily view your account growth and engagement metrics change Week-over-Week and Month-over-Month.',
    image: 'https://i.pinimg.com/736x/bf/f2/f8/bff2f89ddf23ea82174c5379e015e44b.jpg',
  },
  {
    title: 'Purchase Streaks',
    description: 'Be gently nudged to shop frequently by keeping up your daily streak.',
    image: 'https://i.pinimg.com/736x/00/46/90/004690eb28fff16b555d972bd6792583.jpg',
  },
  {
    title: 'Product Sentiment Analysis',
    description: 'Track the positivity levels of your purchases over time to understand their impact.',
    image: 'https://i.pinimg.com/736x/85/db/90/85db9063d6c87741da04b2f8dc398318.jpg',
  },
  {
    title: 'Engagement Benchmarks',
    description: 'Compare your shopping engagement with others who have similar purchase histories.',
    image: 'https://i.pinimg.com/736x/db/90/07/db900796489aea5cf9b2abd810fc6e57.jpg',
  },
];

function Shop() {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Welcome to the EcoCart</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="category-image-wrapper">
              <img src={cat.image} alt={cat.title} className="category-image" />
              <div className="category-overlay">
                <p className="category-description">{cat.description}</p>
              </div>
            </div>
            <div className="category-content">
              <h3>{cat.title}</h3>
              <Link to={`/shop/${cat.path}`} className="explore-button">
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <h2 className="blog-title">EcoCart Blog</h2>
        <div className="blog-grid large-images">
          {blogs.slice(0, 3).map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <Link to={blog.path} className="read-more-button">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-grid small-images">
          {blogs.slice(3, 7).map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <Link to={blog.path} className="read-more-button">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <h2 className="coming-soon-title">Coming Soon to EcoCart</h2>
        <p className="coming-soon-subtitle">Exciting new features to enhance your shopping experience!</p>
        <div className="feature-list">
          {comingSoonFeatures.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-image-wrapper">
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
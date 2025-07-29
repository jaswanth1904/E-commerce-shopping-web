import React from 'react';
import './LandingPage.css';
// Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LandingPage() {
  const heroSlides = [
    {
      image: 'https://ideogram.ai/assets/image/lossless/response/Ov-8U_NVRBWnWDO2Ybo9ug',
      title: 'EcoCart',
      description: 'Unbeatable Deals on All Summer Styles – Shop Now & Save Big!',
      quote: 'Sustainability meets style.',
    },
    {
      image: 'https://i.pinimg.com/736x/a0/5b/26/a05b26717c2cefabd9769525a50b4b2d.jpg',
      title: 'Eco-Friendly Fashion',
      description: 'Discover our latest eco-conscious collections!',
      quote: 'Green today, thriving tomorrow.',
    },
    {
      image: 'https://i.pinimg.com/736x/9c/78/20/9c7820783eca62ce5f259cb048e87afb.jpg',
      title: 'Shop Sustainable',
      description: 'Style that doesn’t cost the earth.',
      quote: 'Fashion with a purpose.',
    },
  ];

  const products = [
    {
      id: 1,
      name: "Men's T-Shirt",
      category: "Men's Wear",
      label: "Hot",
      price: "$19.99",
      description: "Comfortable cotton t-shirt with premium fit",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Formal Shirt",
      category: "Men's Wear",
      label: "New",
      price: "$29.99",
      description: "Slim-fit formal shirt for a sharp look",
      image: "https://i.pinimg.com/736x/47/af/37/47af37136a95fab822cff14bd00badab.jpg",
    },
    {
      id: 3,
      name: "Women's Dress",
      category: "Women's Wear",
      price: "$49.99",
      description: "Elegant evening dress with a flowy design",
      image: "https://i.pinimg.com/736x/ba/5a/1e/ba5a1e925d894d05b0cb665bb897dec1.jpg",
    },
    {
      id: 4,
      name: "Smartphone X",
      category: "Electronics",
      label: "Best Seller",
      price: "$699.00",
      description: "Powerful smartphone with high-res camera",
      image: "https://i.pinimg.com/736x/dd/db/61/dddb61fc91b87e4ad37bb2042ce9ace1.jpg",
    },
    {
      id: 5,
      name: "Whey Protein",
      category: "Gym Supplements",
      label: "Trending",
      price: "$59.99",
      description: "Premium protein for muscle growth and recovery",
      image: "https://i.pinimg.com/736x/05/f7/05/05f7052c3bdc88b728fbc6c132f5ac7f.jpg",
    },
    {
      id: 6,
      name: "Hydrating Serum",
      category: "Skincare",
      label: "Best Seller",
      price: "$48.99",
      description: "Intense hydration for all skin types",
      image: "https://i.pinimg.com/736x/25/6a/23/256a23876ebc883ee49b28d082f58781.jpg",
    },
    {
      id: 7,
      name: "Toy Racing Car",
      category: "Toys",
      price: "$14.99",
      description: "Fun battery-powered racing car for kids",
      image: "https://i.pinimg.com/736x/00/69/d8/0069d8aa9665cde19bdc8545b5c715dc.jpg",
    },
    {
      id: 8,
      name: "Kids Hoodie",
      category: "Kids Fashion",
      label: "New",
      price: "$24.99",
      description: "Warm and stylish hoodie for children",
      image: "https://i.pinimg.com/736x/ff/62/8c/ff628c91f0f89ee58a904b8d1524a9df.jpg",
    },
  ];
  return (
    <div className="landing-container">
      
      {/* Hero Section */}
      <section className="hero">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <div className="hero-overlay">
                  <div className="hero-content">
                    <h1><strong>{slide.title}</strong></h1>
                    <p>{slide.description}</p>
                    <blockquote>{slide.quote}</blockquote>
                  </div>
                </div>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="hero-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products */}
<section className="products">
  <h2>Explore Our Sustainable Picks</h2>
  <p>Discover our top products</p>
  <div className="carousel-container">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={4}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="product-carousel"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="product-card">
            {product.label && (
              <span className="product-label">{product.label}</span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <div className="product-pricing">
                <p className="product-price">{product.price}</p>
                {product.discount && (
                  <p className="product-discount">{product.discount}% OFF</p>
                )}
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="why-choose-us-wrapper">
        <div className="why-choose-us-container">
          <div className="why-text-content">
            <h2>Why Choose Us ? </h2>
            <p className="subtitle">Unmatched Variety</p>
            <p className="description">
              Every product is handpicked and quality-checked to ensure it meets our high standards and your expectations.
            </p>
          </div>
          <div className="why-image">
            <img
              src="https://cdn.vectorstock.com/i/500p/55/61/why-choose-us-speech-bubble-vector-24175561.jpg"
              alt="Why Choose Us"
            />
          </div>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="icon-circle">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCItpz1v0i--OM-84CZO1LZs0jV7FvWjJ-Q&s" alt="Clean Ingredients" />
            </div>
            <h3>Affordable Prices</h3>
            <p>Get the best value for your money. We offer competitive pricing, frequent discounts, and exclusive deals you won’t find elsewhere.</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">
              <img src="https://png.pngtree.com/png-vector/20230223/ourmid/pngtree-trust-line-icon-png-image_6615381.png" alt="Cruelty Free" />
            </div>
            <h3>Trusted Quality</h3>
            <p>Every product is handpicked and quality-checked to ensure it meets our high standards and your expectations.</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">
              <img src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png" alt="Sustainable Packaging" />
            </div>
            <h3>Easy Returns & Secure Payments</h3>
            <p>Your satisfaction is our priority. Enjoy hassle-free returns and secure payment options that protect your data.</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small/fast-delivery-icon-free-vector.jpg" alt="Dermatologist Tested" />
            </div>
            <h3>Fast & Reliable Delivery</h3>
            <p>We understand the excitement of shopping online. That’s why we ensure quick, safe, and on-time deliveries—every time.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="testimonial-carousel">
        <h2>Customer Reviews</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={-10}
          slidesPerView={4}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              name: "Meera Sharma",
              role: "Verified Buyer",
              review: "Amazing delivery experience! Product quality was top-notch.",
            },
            {
              img: "https://randomuser.me/api/portraits/men/15.jpg",
              name: "Rahul Singh",
              role: "Loyal Customer",
              review: "User-friendly interface, fast checkout, and great offers!",
            },
            {
              img: "https://randomuser.me/api/portraits/women/55.jpg",
              name: "Ayesha Khan",
              role: "Influencer",
              review: "Loved the mobile experience. Super clean and fast website.",
            },
            {
              img: "https://randomuser.me/api/portraits/men/30.jpg",
              name: "Jason Patel",
              role: "First-time Buyer",
              review: "Easy to find products and great support. Will buy again!",
            },
            {
              img: "https://randomuser.me/api/portraits/women/22.jpg",
              name: "Neha Verma",
              role: "Beauty Blogger",
              review: "Very smooth checkout and product matched the description perfectly.",
            }
          ].map((user, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <img src={user.img} alt={user.name} />
                <p className="quote">“{user.review}”</p>
                <h4>{user.name}</h4>
                <span>{user.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Join Our EcoCart Community</h2>
          <p>Stay updated with new arrivals, exclusive offers, and sustainable shopping tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Products</a>
            <a href="#" className="footer-link">Collections</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" title="Instagram">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon" title="Pinterest">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/pinterest.png" alt="Pinterest" />
            </a>
          </div>
          <p className="footer-copy">© 2025 EcoCart, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
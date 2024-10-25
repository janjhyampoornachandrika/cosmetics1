import React, { useState } from 'react';
import './Makeupkits.css';

const products = [
  { id: 1, name: 'Makeup Kit 1', description: 'Long-lasting matte lipstick in various shades.', price: '$15.99', image: '/MK1.jpg' },
  { id: 2, name: 'Makeup Kit 2', description: 'High-shine glossy lipstick for a perfect finish.', price: '$12.99', image: '/MK2.jpg' },
  { id: 3, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MK3.jpg' },
  { id: 4, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKC1.jpg' },
  { id: 5, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKC2.jpg' },
  { id: 6, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKC3.jpg' },
  { id: 7, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKB4.jpg' },
  { id: 8, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKB2.jpg' },
  { id: 9, name: 'Makeup Kit 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/MKB3.jpg' },
];

const Makeupkits = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(id) ? prevWishlist.filter((item) => item !== id) : [...prevWishlist, id]
    );
  };

  const toggleCart = (id) => {
    setCart((prevCart) => (prevCart.includes(id) ? prevCart.filter((item) => item !== id) : [...prevCart, id]));
  };

  return (
    <div className="makeupkits-page">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className="product-actions">
            <button
              className={`wishlist-button ${wishlist.includes(product.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
            >
              <i className="fas fa-heart"></i> 
            </button>
            <button
              className="cart-button"
              onClick={() => toggleCart(product.id)}
            >
              <i className="fas fa-shopping-cart"></i> 
              {cart.includes(product.id) ? 'Go to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Makeupkits;

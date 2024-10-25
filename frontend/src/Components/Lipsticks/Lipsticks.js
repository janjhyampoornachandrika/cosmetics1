import React, { useState } from 'react';
import './Lipsticks.css'; 

const products = [
  { id: 1, name: 'Lipstick 1', description: 'Long-lasting matte lipstick in various shades.', price: '$15.99', image: '/L1.jpg' },
  { id: 2, name: 'Lipstick 2', description: 'High-shine glossy lipstick for a perfect finish.', price: '$12.99', image: '/L2.jpg' },
  { id: 3, name: 'Lipstick 3', description: 'High-shine glossy lipstick for a perfect finish.', price: '$11.99', image: '/L3.jpg' },
  { id: 4, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$10.99', image: '/GL1.jpg' },
  { id: 5, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$13.99', image: '/GL2.jpg' },
  { id: 6, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$16.99', image: '/GL3.jpg' },
  { id: 7, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$18.99', image: '/WPL1.jpg' },
  { id: 8, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$19.99', image: '/WPL2.jpg' },
  { id: 9, name: 'Lipstick', description: 'High-shine glossy lipstick for a perfect finish.', price: '$1.099', image: '/WPL3.jpg' },
];

const Lipsticks = () => {
  const [wishlist, setWishlist] = useState([]); 
  const [cart, setCart] = useState([]); 

  const toggleWishlist = (id) => {

    setWishlist((prevWishlist) =>
      prevWishlist.includes(id) ? prevWishlist.filter((item) => item !== id) : [...prevWishlist, id]
    );
  };

  const toggleCart = (id) => {
   
    if (cart.includes(id)) {
      setCart((prevCart) => prevCart.filter((item) => item !== id)); 
    } else {
      setCart((prevCart) => [...prevCart, id]); 
    }
  };

  return (
    <div className="lipsticks-page">
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

export default Lipsticks;

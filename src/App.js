import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [products, setProducts] = useState([
    // Example products
    { id: 1, title: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, title: 'Product 2', description: 'Description 2', price: 20 },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Checkout');
    setCart([]);
  };

  return (
    <div>
      <h1>E-commerce App</h1>
      <CustomerForm />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <ShoppingCart
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
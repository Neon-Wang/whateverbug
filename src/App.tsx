import { useState } from 'react';
import { Product, CartItem } from './types';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import './styles/App.css';

const initialProducts: Product[] = [
  { id: 1, name: '苹果', price: 10.00, image: '🍎' },
  { id: 2, name: '香蕉', price: 8.00, image: '🍌' },
  { id: 3, name: '橙子', price: 12.00, image: '🍊' },
  { id: 4, name: '葡萄', price: 15.00, image: '🍇' },
  { id: 5, name: '草莓', price: 20.00, image: '🍓' },
  { id: 6, name: '西瓜', price: 25.00, image: '🍉' },
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemove(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>购物车</h1>
      </header>
      <main className="app-main">
        <ProductList products={initialProducts} onAddToCart={handleAddToCart} />
        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemove}
        />
      </main>
    </div>
  );
}

export default App;

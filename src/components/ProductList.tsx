import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <div className="product-list">
      <h2>商品列表</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="product-emoji">{product.image}</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">¥{product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                添加到购物车
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

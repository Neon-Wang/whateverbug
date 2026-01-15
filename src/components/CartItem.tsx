import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItem = ({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  const subtotal = item.product.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <span className="product-emoji">{item.product.image}</span>
      </div>
      <div className="cart-item-info">
        <h4>{item.product.name}</h4>
        <p className="cart-item-price">单价: ¥{item.product.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item-subtotal">
          小计: ¥{subtotal.toFixed(2)}
        </div>
        <button
          className="remove-btn"
          onClick={() => onRemove(item.product.id)}
        >
          删除
        </button>
      </div>
    </div>
  );
};

import { CartItem as CartItemType } from '../types';
import { CartItem } from './CartItem';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const Cart = ({ items, onUpdateQuantity, onRemove }: CartProps) => {
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.price * item.quantity * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();

  return (
    <div className="cart">
      <h2>购物车</h2>
      {items.length === 0 ? (
        <p className="empty-cart">购物车是空的</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-total">
              <strong>总计: ¥{total.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

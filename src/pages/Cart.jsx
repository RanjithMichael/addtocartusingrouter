import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, total, discount } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => <CartItem key={item.id} item={item} />)}
          <div className="mt-4 text-right">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <p className="font-bold">Final Total: ${(total - discount).toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
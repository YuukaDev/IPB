import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../utils/StoreContext";

export const CartItem = ({ image, id, name, price, quantity, line_total }) => {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <div className="flex justify-center items-center gap-10">
      <img style={{ width: "115px", height: "80px" }} src={image.url} />
      <p>{name}</p>
      <p>{price.formatted_with_symbol}</p>
      <div className="flex gap-3">
        <button onClick={decrementQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={removeItem}>&times;</button>
    </div>
  );
};

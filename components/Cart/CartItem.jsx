import commerce from "../../lib/commerce";
import { BsTrash } from "react-icons/bs";
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
    <tbody className="shadow-lg">
      <tr>
        <td>
          <img src={image.url} className="max-w-xs rounded" />
        </td>
        <td>
          <div className="flex flex-col text-lg">
            <p className="text-left text-lg w-72 mb-2">{name}</p>
            <div className="flex gap-1">
              <a
                onClick={removeItem}
                className="cursor-pointer text-gray-700 font-bold text-xs text-left"
              >
                Remove
              </a>
              <BsTrash />
            </div>
          </div>
        </td>
        <td className="text-center">
          <span className="text-lg font-semibold">
            {price.formatted_with_symbol}
          </span>
        </td>
        <td className="justify-center items-center">
          <div className="flex justify-center items-center gap-3">
            <button className="text-lg" onClick={incrementQuantity}>
              +
            </button>
            <div
              style={{
                border: "2px solid #34de01",
                padding: "5px 12px",
                borderRadius: "100%",
              }}
            >
              <p className="text-logoGreen">{quantity}</p>
            </div>
            <button className="text-lg font-normal" onClick={decrementQuantity}>
              -
            </button>
          </div>
        </td>
        <td className="text-center">
          <span className="text-lg font-semibold">
            {line_total.formatted_with_symbol}
          </span>
        </td>
      </tr>
    </tbody>
  );
};

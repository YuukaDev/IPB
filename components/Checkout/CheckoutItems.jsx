import commerce from "../../lib/commerce";
import { BsTrash } from "react-icons/bs";
import { useCartDispatch } from "../../utils/StoreContext";

export default function CheckoutItems({
  image,
  id,
  name,
  price,
  quantity,
  line_total,
}) {
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
    <div>
      <div className="flex p-3 gap-10 justify-center items-center">
        <img src={image.url} className="w-44 rounded" />
        <p className="w-40">{name}</p>
        <div className="flex justify-center items-center flex-col">
          <span className="text-lg font-semibold">
            {price.formatted_with_symbol}
          </span>
          <span className="text-sm text-gray-500 font-semibold">{`( Price )`}</span>
        </div>
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
    </div>
  );
}

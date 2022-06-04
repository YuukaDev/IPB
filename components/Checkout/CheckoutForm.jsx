import useShop from "../../utils/StoreContext";
import CheckoutItems from "./CheckoutItems";

export default function CheckoutForm({ register, handleSubmit }) {
  const { line_items, subtotal } = useShop();
  const isEmpty = line_items.length === 0;

  if (isEmpty) {
    return <div>Your cart is empty go shop!</div>;
  }

  return (
    <div className="flex justify-center items-center gap-20 mt-32">
      <form
        className="w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit
        }}
      >
        <h1 className="mb-5 text-lg tracking-wide">Billing adress</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="grid-first-name"
            >
              Full Name
            </label>
            <input
              required
              className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="John"
              {...register("First name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              required
              className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              {...register("Last name", { required: true, maxLength: 100 })}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="email-adress"
            >
              Email adress
            </label>
            <input
              required
              className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
              id="email-adress"
              type="text"
              placeholder="you@domain.com"
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
        </div>
        <h1 className="mb-5">Payment methods</h1>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" {...register("Developer", { required: true })} />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Credit / debit card
          </label>
        </div>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" {...register("Developer", { required: true })} />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Paypal
          </label>
        </div>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" {...register("Developer", { required: true })} />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Paysafecard
          </label>
        </div>
        <input
          value={`Pay ${subtotal.formatted_with_symbol} by PAYPAL`}
          type="submit"
          className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        ></input>
      </form>
      <div>
        <div className="flex flex-col gap-5 shadow-2xl rounded-2xl p-5 h-highlight min-h-max">
          {line_items.map((item) => (
            <CheckoutItems key={item.id} {...item} />
          ))}
          <div className="p-3">
            <hr className="w-full mt-3" />
            <div className="mt-5 flex items-center justify-between">
              <h1 className="text-lg tracking-wide">Subtotal</h1>
              <span className="text-lg font-semibold">
                {subtotal.formatted_with_symbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

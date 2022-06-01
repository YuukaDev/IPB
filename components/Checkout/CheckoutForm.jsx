import useShop from "../../utils/StoreContext";

export default function CheckoutForm({ capture }) {
  const { subtotal } = useShop();
  return (
    <div className="mt-32 w-highlight m-auto">
      <form className="w-full max-w-lg" onSubmit={capture}>
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
              className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="John"
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
              className="w-full bg-gray-100 text-gray-500 border-2 border-logoGreen rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="John"
            />
          </div>
        </div>
        <h1 className="mb-5">Payment methods</h1>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Credit / debit card
          </label>
        </div>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Paypal
          </label>
        </div>
        <div className="flex justify-start items-start gap-3 md:w-1/2 px-3 ">
          <input type="radio" />
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Paysafecard
          </label>
        </div>
        <button className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay {subtotal.formatted_with_symbol} by PAYPAL
        </button>
      </form>
    </div>
  );
}

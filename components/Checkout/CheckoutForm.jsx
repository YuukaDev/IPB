import { useState } from "react";
import { useRouter } from "next/router";

import commerce from "../../lib/commerce";

import useShop, { useCartDispatch } from "../../utils/StoreContext";
import Spinner from "../../components/Spinner/Spinner";
import CheckoutData from "./CheckoutData";

import { ToastContainer, toast } from "react-toastify";

export default function CheckoutForm({ token, loading }) {
  const router = useRouter();
  const { line_items } = useShop();
  const { setCart } = useCartDispatch();
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardName, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [zipCode, setZipCode] = useState("");

  const isEmpty = line_items.length === 0;
  const value = token.live?.total.formatted_with_symbol;
  const formData = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    address,
    setAddress,
    city,
    setCity,
    cardNum,
    setCardNum,
    cardName,
    setName,
    expDate,
    setExpDate,
    zipCode,
    setZipCode,
  };

  function submitCheckout() {
    commerce.checkout
      .capture(token.id, {
        line_items: token.live_line_items,
        conditionals: {
          collects_billing_address: true,
        },
        customer: {
          firstname: firstName,
          lastname: lastName,
          email: email,
        },
        shipping: {
          name: `${firstName} ${lastName}`,
          street: address,
          town_city: city,
          county_state: "US-CA",
          postal_zip_code: zipCode,
          country: "US",
        },
        fulfillment: {
          shipping_method: "ship_1ypbroE658n4ea",
        },
        billing: {
          name: `${firstName} ${lastName}`,
          street: address,
          town_city: city,
          county_state: "US-CA",
          postal_zip_code: zipCode,
          country: "US",
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: cardNum,
            expiry_month: expDate.substring(0, 2),
            expiry_year: expDate.substring(3, 5),
            cvc: "123",
            postal_zip_code: zipCode,
          },
        },
      })
      .then((response) => {
        alert("Great, your checkout was captured successfully!");
        const cart = commerce.cart.delete();
        setCart(cart);
        router.push("/");
      })
      .catch((error) => {
        toast.error("There was an error durring your payment!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCheckout();
  };

  if (isEmpty) {
    return <div className="h-screen">Your cart is empty go shop!</div>;
  }

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div className="h-highlight mb-32 flex justify-center items-center gap-20 mt-32">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <h1 className="mb-5 text-lg tracking-wide">Billing adress</h1>
        <CheckoutData {...formData} />
        <button className="font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
          Pay {value}
        </button>
      </form>
    </div>
  );
}

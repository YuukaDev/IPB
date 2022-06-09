import { useState, useEffect, useRef } from "react";
import commerce from "../../lib/commerce";
import useShop from "../../utils/StoreContext";
import GridLoader from "react-spinners/GridLoader";

export default function PaypalButton() {
  const { cart } = useShop();
  const [token, setToken] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const paypal = useRef();
  const value = token.live?.total.raw;

  async function getPaypalPaymentId() {
    try {
      // Use a checkout token ID that was generated earlier, and any order details that may have been collected
      // on this page.
      const paypalAuth = await commerce.checkout.capture(token.id, {
        // Include PayPal action:
        payment: {
          gateway: "paypal",
          paypal: {
            action: "authorize",
          },
        },
      });

      renderPaypalButton(paypalAuth);
      return;
    } catch (response) {
      // There was an issue with capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    } finally {
      // Any loading state can be removed here.
    }
  }

  function renderPaypalButton(paypalAuth) {
    window.paypal.Button.render(
      {
        env: "production", // Or 'sandbox',
        commit: true, // Show a 'Pay Now' button
        payment: function () {
          return paypalAuth.payment_id; // The payment ID from earlier
        },
        onAuthorize: function (data, actions) {
          // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
          captureOrder(data);
        },
        onCancel: function (data, actions) {
          // Handler if customer does not authorize payment
        },
      },
      "#paypal-button-container"
    );
  }

  async function captureOrder() {
    try {
      // Complete capturing the order.
      const order = await commerce.checkout.capture(checkoutTokenId, {
        ...orderDetails,
        // We have now changed the action to "capture" as well as included the "payment_id and "payer_id"
        payment: {
          gateway: "paypal",
          paypal: {
            action: "capture",
            payment_id: "PAY-51028384J84281644LGFZXJQ",
            payer_id: "VE57TQRTVER5Y",
          },
        },
      });

      // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
      console.log(order);
      return;
    } catch (response) {
      // There was an issue capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    } finally {
      // Any loading state can be removed here.
    }
  }

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setToken(token);
          setLoading(false);
        } catch (err) {
          setLoading(true);
          console.log(err);
        }
      };

      generateToken();
    }

    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://www.paypalobjects.com/api/checkout.js";
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, [cart]);

  if (loading) {
    return (
      <GridLoader margin={20} color="#34de01" loading={loading} size={20} />
    );
  }

  return (
    <div id="checkout">
      <div id="paypal-button-container"></div>
    </div>
  );
}

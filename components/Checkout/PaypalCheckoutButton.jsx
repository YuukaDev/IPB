import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import commerce from "../../lib/commerce";
import useShop from "../../utils/StoreContext";

export default function PaypalCheckoutButton({ product }) {
  const { cart } = useShop();
  const [token, setToken] = useState(null);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  if (paidFor) {
    alert("Thank you for your purchase!");
  }

  if (error) {
    alert(error);
  }
  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setToken(token);
        } catch (err) {
          console.log(err);
        }
      };

      generateToken();
    }
  }, [cart]);

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions) => {
          // Validate on button click, client or server side
          const hasAlreadyBoughtCourse = false;

          if (hasAlreadyBoughtCourse) {
            setError(
              "You already bought this course. Go to your account to view your list of courses."
            );

            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await commerce.checkout.capture(token.id, {
            payment: {
              gateway: "paypal",
              paypal: {
                action: "capture",
                payment_id: "PAY-51028384J84281644LGFZXJQ",
                payer_id: "VE57TQRTVER5Y",
              },
            },
          });
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {
          // Display cancel message, modal or redirect user to cancel page or back to cart
        }}
        onError={(err) => {
          setError(err);
          console.error("PayPal Checkout onError", err);
        }}
      />
      ;
    </PayPalScriptProvider>
  );
}

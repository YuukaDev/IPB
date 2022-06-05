import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalCheckoutButton({ product, submit }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    console.log("Thank you for purchasing from Igrice Prodaja Balkan");
  }

  if (error) {
    console.log(error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={submit}
        createOrder={(data, acitons) => {
          return acitons.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, aciton) => {
          const order = await aciton.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.log(err);
        }}
      />
    </PayPalScriptProvider>
  );
}

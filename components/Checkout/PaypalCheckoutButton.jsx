import { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import commerce from "../../lib/commerce";
import useShop from "../../utils/StoreContext";
import GridLoader from "react-spinners/GridLoader";

export default function PaypalCheckoutButton() {
  const { cart } = useShop();
  const [token, setToken] = useState([]);
  const [paidFor, setPaidFor] = useState(false);
  const [loading, setLoading] = useState(true);
  const value = token.live?.total.raw;

  if (paidFor) {
    alert("Thank you for your purchase!");
  }

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  const captureCheckout = () => {
    commerce.checkout
      .capture(token.id, {
        customer: {
          firstname: "John",
          lastname: "Doe",
          email: "buyer@example.com",
        },
        shipping: {
          name: "John Doe",
          country: "US",
          street: "123 Fake St",
          town_city: "San Francisco",
          county_state: "CA",
          postal_zip_code: "94103",
        },
        fulfillment: {
          shipping_method: "ship_7RyWOwmK5nEa2V",
        },
        billing: {
          name: "John Doe",
          country: "US",
          street: "123 Fake St",
          town_city: "San Francisco",
          county_state: "CA",
          postal_zip_code: 94103,
        },
        payment: {
          gateway: "paypal",
          paypal: {
            action: "authorize",
          },
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  }, [cart]);

  if (loading) {
    return (
      <GridLoader margin={20} color="#34de01" loading={loading} size={20} />
    );
  }

  return (
    <PayPalButtons
      onClick={(data, actions) => {
        const hasAlreadyBoughtCourse = false;
        if (hasAlreadyBoughtCourse) {
          setError("You Already bough this course");
          return actions.reject();
        } else {
          actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: value,
              },
            },
          ],
        });
      }}
      onApprove={async (data, action) => {
        const order = await action.order.capture();
        console.log("order", order);

        captureCheckout();
        handleApprove(data.orderID);
      }}
      onCancel={() => {}}
      onError={(err) => {
        setError(err);
        console.log("PayPal Checkout onError", err);
      }}
    />
  );
}

/*
  async function captureOrder() {
    try {
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

 onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    setError("You Already bough this course");
                    return actions.reject();
                }else{
                    return actions.resolve();
                }
            }}
            createOrder = {(data, actions) => {
                return actions.order.create({
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
            onApprove = { async (data, action) => {
                const order = await action.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err);
            }}
*/

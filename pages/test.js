import { useState, useEffect } from "react";
import PaypalCheckoutButton from "../components/Checkout/PaypalCheckoutButton";
import useShop from "../utils/StoreContext";
import commerce from "../lib/commerce";
import PaypalButton from "../components/Checkout/PaypalButton";

export default function Test() {
    const { cart, line_items } = useShop();
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const [cardNum, setCardNum] = useState("");
    const [cardName, setName] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardType, setCardType] = useState("");
    const [zipCode, setZipCode] = useState("");

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
                    console.log(err);
                }
            };

            generateToken();
        }
    }, [cart]);

    function submitCheckout() {
        commerce.checkout
            .capture(token.id, {
                line_items: token.live_line_items,
                conditionals: {
                    collects_billing_address: true
                },
                customer: {
                    firstname: firstName,
                    lastname: lastname,
                    email: email
                },
                shipping: {
                    name: `${firstName} ${lastname}`,
                    street: address,
                    town_city: city,
                    county_state: 'US-CA',
                    postal_zip_code: zipCode,
                    country: "US"
                },
                fulfillment: {
                    shipping_method: "ship_1ypbroE658n4ea"
                },
                billing: {
                    name: `${firstName} ${lastname}`,
                    street: address,
                    town_city: city,
                    county_state: 'US-CA',
                    postal_zip_code: zipCode,
                    country: "US"
                },
                payment: {
                    gateway: "test_gateway",
                    card: {
                        number: cardNum,
                        expiry_month: expDate.substring(0, 2),
                        expiry_year: expDate.substring(3, 5),
                        cvc: "123",
                        postal_zip_code: zipCode
                    }
                }
            })
            .then((response) => {
                console.log(
                    "Great, your checkout was captured successfully! Checkout the response object for receipt info.",
                    response
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCheckout();
    }

    console.log(token.live.line_items);

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

            <label htmlFor="city">City</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" id="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="cardnumber">Card Number</label>
                <input type="text" id="cardnumber" value={cardNum} onChange={(e) => setCardNum(e.target.value)} />

                <label htmlFor="nameoncard">Name on Card</label>
                <input type="text" id="nameoncard" value={cardName} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="expiration">Expiration Date</label>
                <input required="" placeholder="01/23" name="expDate" type="text" id="expirationDate" value={expDate} onChange={(e) => {
                    setExpDate(e.target.value);
                }} />
                <button className="mt-5 bg-red-500" type="submit">
                    Checkout
                </button>
            </form>
        </div>
    );
}
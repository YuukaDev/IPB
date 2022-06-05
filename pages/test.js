import PaypalCheckoutButton from "../components/Checkout/PaypalCheckoutButton";

export default function Test() {
    const product = {
        description: "Learn how to build a website with React JS",
        price: 29,
    };
    return (
        <div className="flex justify-center items-center mt-20">
            <PaypalCheckoutButton product={product} />
        </div>
    );
}
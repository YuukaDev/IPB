import commerce from "../lib/commerce";

export default function CartPage() {
    const cartId = "cart_nPEVlN1Qn05a7d";
    const cartItems = commerce.cart.retrieve(cartId);
    return (
        <div>
            {cartItems.line_total.map(stapricas => (
                <div>
                    <h1>{stapricas.name}</h1>
                    <img src={stapricas.image.url} />
                    <p>{stapricas.line_total_formatted}</p>
                </div>
            ))}
        </div >
    )
}
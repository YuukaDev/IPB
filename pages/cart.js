import { Box } from "@chakra-ui/react";
import commerce from "../lib/commerce";

export async function getStaticProps() {
    const products = await commerce.cart.contents();
    const data = JSON.stringify(products);
    return {
        props: {
            data,
        }
    }
}

export default function Cart({ data }) {
    const sendData = () => {
        commerce.cart.contents().then((response) => console.log(response));
    }
    return (
        <Box>
            <button onClick={sendData}>Click Me</button>
            {data.map((product) => (
                <div>
                    <h1>{product.name}</h1>
                    <img src={product.image.url} />
                    <p>{product.price.formatted_with_code}</p>
                </div>
            ))}
        </Box>
    )
}
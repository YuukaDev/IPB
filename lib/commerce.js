import Commerce from "@chec/commerce.js";

const checPublicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY;

const client = new Commerce(checPublicKey);

export default client;
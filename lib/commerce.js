import Commerce from "@chec/commerce.js";

const checPublicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY;
//const devEnvironment = process.env.NODE_ENV === 'development';

const client = new Commerce(checPublicKey);

export default client;
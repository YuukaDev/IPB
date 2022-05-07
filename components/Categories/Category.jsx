export default function Category({ products }) {
  return (
    <div id="hottest">
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.image.url} />
          <p>{product.price.formatted}</p>
        </div>
      ))}
    </div>
  );
}

export const AboutBox = ({ product }) => {
  return (
    <div className="w-2/4">
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg mb-3">Visuals</h1>
        <div>
          <video className="w-video rounded-2xl" controls={true}>
            <source src={product.assets[5].url} />
          </video>
          <div className="w-visualImage flex gap-3 mt-5">
            <img className="rounded-2xl" src={product.assets[2].url} />
            <img className="rounded-2xl" src={product.assets[3].url} />
            <img className="rounded-2xl" src={product.assets[4].url} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">About Game</h1>
        <p className="text-gray-700 text-md mt-2 mb-2">
          {product.attributes[0].value}
        </p>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">Configurations</h1>
        <div className="flex justify-center items-center gap-10 mb-20">
          <div className="mt-3">
            <h2 className="uppercase tracking-widest text-sm">
              Minimal Configuration
            </h2>
            <p className="mt-2">{product.attributes[1].value}</p>
          </div>
          <div className="mt-3">
            <h2 className="uppercase tracking-widest text-sm">
              Recomended Configuration
            </h2>
            <p className="mt-2">{product.attributes[2].value}</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="uppercase tracking-widest text-lg">Similiar Products</h1>
      </div>
    </div>
  );
};

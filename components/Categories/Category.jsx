import Link from "next/link";

const Card = ({ children }) => {
  return <div class="grid grid-cols-categories text-heroColor">{children}</div>;
};

export const Category = () => {
  return (
    <Card>
      <section className="bg-category-1 h-categoryContainer w-full  bg-no-repeat bg-cover bg-centertext-heroColor">
        <div className="flex justify-center items-center flex-col h-categories">
          <h1 className="text-lg uppercase font-medium height leading-5 tracking-heroWide">
            Action
          </h1>
          <br />
          <Link href="/">
            <button className="font-normal tracking-widest bg-white uppercase hover:bg-transparent hover:border-solid border border-white text-black hover:text-white py-3 px-5 transition-all">
              View Now
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-category-2 h-categoryContainer w-full  bg-no-repeat bg-cover bg-centertext-heroColor">
        <div className="flex justify-center items-center flex-col h-categories">
          <h1 className="text-lg uppercase font-medium height leading-5 tracking-heroWide">
            Adventure
          </h1>
          <br />
          <Link href="/">
            <button className="font-normal tracking-widest bg-white uppercase hover:bg-transparent hover:border-solid border border-white text-black hover:text-white py-3 px-5 transition-all">
              View Now
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-category-3 h-categoryContainer w-full  bg-no-repeat bg-cover bg-centertext-heroColor">
        <div className="flex justify-center items-center flex-col h-categories">
          <h1 className="text-lg uppercase font-medium height leading-5 tracking-heroWide">
            RPG
          </h1>
          <br />
          <Link href="/">
            <button className="font-normal tracking-widest bg-white uppercase hover:bg-transparent hover:border-solid border border-white text-black hover:text-white py-3 px-5 transition-all">
              View Now
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-category-4 h-categoryContainer w-full  bg-no-repeat bg-cover bg-centertext-heroColor">
        <div className="flex justify-center items-center flex-col h-categories">
          <h1 className="text-lg uppercase font-medium height leading-5 tracking-heroWide">
            Horror
          </h1>
          <br />
          <Link href="/">
            <button className="font-normal tracking-widest bg-white uppercase hover:bg-transparent hover:border-solid border border-white text-black hover:text-white py-3 px-5 transition-all">
              View Now
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-category-5 h-categoryContainer w-full  bg-no-repeat bg-cover bg-centertext-heroColor">
        <div className="flex justify-center items-center flex-col h-categories">
          <h1 className="text-lg uppercase font-medium height leading-5 tracking-heroWide">
            Indie
          </h1>
          <br />
          <Link href="/">
            <button className="font-normal tracking-widest bg-white uppercase hover:bg-transparent hover:border-solid border border-white text-black hover:text-white py-3 px-5 transition-all">
              View Now
            </button>
          </Link>
        </div>
      </section>
    </Card>
  );
};

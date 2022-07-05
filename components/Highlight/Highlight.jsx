import Link from "next/link";

export default function Highlight() {
  return (
    <div
      id="newest"
      className="md:w-full sm:w-full bg-highlight-section w-full h-highlight bg-no-repeat bg-cover bg-center text-heroColor"
    >
      <div className="h-hero flex justify-center items-start w-highlight m-auto flex-col">
        <p className="text-md uppercase font-medium height leading-5 tracking-heroWide">
          Newest
        </p>
        <h1 className="mt-5 text-3xl tracking-heroWide leading-7 font-normal">
          Dying Light 2 Stay Human
        </h1>
        <div className="mt-6">
          <Link href="/">
            <button className="font-normal tracking-widest bg-transparent uppercase hover:bg-white text-white hover:text-black py-3 px-5 border border-white transition-all">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

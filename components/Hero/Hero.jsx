import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="hero text-heroColor">
        <div className="w-full h-4/5 flex justify-center items-center flex-col">
          <p className="text-md uppercase font-medium height leading-5 tracking-heroWide">
            New Trending
          </p>
          <h1 className="mt-5 text-3xl tracking-heroWide leading-7 font-normal">
            Forza Horizon 5
          </h1>
          <div className="mt-6">
            <Link passHref href="/">
              <button class="bg-transparent uppercase hover:bg-white text-white font-semibold hover:text-black py-3 px-5 border border-white  transition-all">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
        <h1>yo</h1>
      </div>
    </>
  );
}
